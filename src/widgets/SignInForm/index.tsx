import {useForm} from 'react-hook-form';
import styles from './index.module.scss';
import {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { login, getUser, refreshTokenRequest, verify } from '../../api/auth';
import { Index as Modal } from '../Modal';

export const SignInForm = ({onSignUpClick}: { onSignUpClick?: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: '',
        },
    });

    const [showCodeModal, setShowCodeModal] = useState(false);
    const [emailForVerify, setEmailForVerify] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [codeError, setCodeError] = useState<string | null>(null);
    const dispatch = useDispatch();
    const [code, setCode] = useState('');

    // Отправка email для получения кода
    const onSubmit = async (data: any) => {
        setLoading(true);
        setError(null);
        try {
            await login(data.email);
            setEmailForVerify(data.email);
            setShowCodeModal(true);
        } catch (e: any) {
            setError(e.response?.data?.message || e.message || 'Ошибка отправки кода');
        } finally {
            setLoading(false);
        }
    };

    // Подтверждение кода
    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setCodeError(null);
        setLoading(true);
        try {
            const { userId, accessToken, refreshToken } = await verify(emailForVerify, code);
            localStorage.setItem('refreshToken', refreshToken);
            // Получаем данные пользователя
            const userData = await getUser(userId);
            dispatch(setUser({
                ...userData,
                accessToken,
                refreshToken,
                userId,
            }));
            setShowCodeModal(false);
        } catch (e: any) {
            setCodeError(e.response?.data?.message || e.message || 'Неверный код');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.authForm__container}>
            <form className={styles.authForm__form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.authForm__title}>Авторизация</h2>
                <div className={`${styles.authForm__inputGroup} ${errors.email ? styles.authForm__inputGroupError : ''}`}>
                    <input
                        type="email"
                        placeholder={errors.email?.message as string || "Email"}
                        className={styles.authForm__input}
                        {...register('email', {
                            required: 'Email обязателен',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Некорректный email',
                            },
                        })}
                        disabled={loading}
                    />
                </div>
                {error && <div className={styles.authForm__error}>{error}</div>}
                <button type="submit" className={styles.authForm__button} disabled={loading}>
                    {loading ? 'Загрузка...' : 'Получить код'}
                </button>
                <p className={styles.authForm__footerText}>
                    Ещё нет аккаунта? Зарегистрироваться можно
                    <a href="#" className={styles.authForm__link} onClick={e => {
                        e.preventDefault();
                        onSignUpClick && onSignUpClick();
                    }}>
                        тут
                    </a>
                </p>
            </form>
            <Modal isOpen={showCodeModal} onClose={() => setShowCodeModal(false)}>
                <form onSubmit={handleVerify} className={styles.authForm__form} style={{boxShadow: 'none', background: 'transparent'}}>
                    <h2 className={styles.authForm__title}>Введите код из письма</h2>
                    <div className={styles.authForm__inputGroup}>
                        <input
                            type="text"
                            maxLength={4}
                            value={code}
                            onChange={e => setCode(e.target.value.replace(/\D/g, ''))}
                            placeholder={codeError || "4-значный код"}
                            className={styles.authForm__input}
                            style={codeError ? {borderColor: '#ff4d4f'} : {}}
                            disabled={loading}
                        />
                    </div>
                    {codeError && <div className={styles.authForm__error}>{codeError}</div>}
                    <button type="submit" className={styles.authForm__button} disabled={loading || code.length !== 4}>
                        {loading ? 'Загрузка...' : 'Войти'}
                    </button>
                </form>
            </Modal>
        </div>
    );
};