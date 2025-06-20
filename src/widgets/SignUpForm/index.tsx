import {useForm} from 'react-hook-form';
import styles from './index.module.scss';
import {useState} from 'react';
import { registerUser } from '../../api/auth';

function RegistrationForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const purposeOptions = [
        {label: 'Я хочу искать мероприятия и места', roles: ['USER']},
        {label: 'Я хочу публиковать мероприятия', roles: ['USER', 'ORGANIZER']},
        {label: 'Я хочу публиковать места', roles: ['USER', 'PLATFORM']},
        {label: 'Я хочу публиковать мероприятия и места', roles: ['USER', 'ORGANIZER', 'PLATFORM']},
    ];

    const onSubmit = async (data: any) => {
        setLoading(true);
        setError(null);
        try {
            const selectedPurpose = purposeOptions.find(opt => opt.label === data.purpose);
            const roles = selectedPurpose ? selectedPurpose.roles : ['USER'];
            const requestBody = {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                isPublicProfile: false,
                roles,
                authProvider: 'LOCAL',
            };
            await registerUser(requestBody);
            // Можно добавить редирект или сообщение об успехе
        } catch (e: any) {
            setError(e.response?.data?.message || e.message || 'Ошибка регистрации');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.authForm__container}>
            <form className={styles.authForm__form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.authForm__title}>Регистрация</h2>

                <div
                    className={`${styles.authForm__inputGroup} ${errors.email ? styles.authForm__inputGroupError : ''}`}>
                    <input
                        type="email"
                        placeholder={errors.email?.message as string || "Email"}
                        className={styles.authForm__input}
                        {...register("email", {required: "Email обязателен"})}
                    />
                </div>

                <div
                    className={`${styles.authForm__inputGroup} ${errors.password ? styles.authForm__inputGroupError : ''}`}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder={errors.password?.message as string || "Пароль"}
                        className={styles.authForm__input}
                        {...register("password", {
                            required: "Пароль обязателен",
                            minLength: {value: 6, message: "Пароль должен быть не менее 6 символов"}
                        })}
                    />
                    <button type="button" onClick={() => setShowPassword(v => !v)}
                            className={styles.authForm__showPasswordBtn} tabIndex={-1} aria-label="Показать пароль">
                        <img
                            src={showPassword ? '/vector-icons/eye-off-svgrepo-com.svg' : '/vector-icons/eye-show-svgrepo-com.svg'}
                            alt={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                            className={styles.authForm__eyeIcon}
                        />
                    </button>
                </div>

                <div
                    className={`${styles.authForm__inputGroup} ${errors.firstName ? styles.authForm__inputGroupError : ''}`}>
                    <input
                        type="text"
                        placeholder={errors.firstName?.message as string || "Имя"}
                        className={styles.authForm__input}
                        {...register("firstName", {required: "Имя обязательно"})}
                    />
                </div>

                <div
                    className={`${styles.authForm__inputGroup} ${errors.lastName ? styles.authForm__inputGroupError : ''}`}>
                    <input
                        type="text"
                        placeholder={errors.lastName?.message as string || "Фамилия"}
                        className={styles.authForm__input}
                        {...register("lastName", {required: "Фамилия обязательна"})}
                    />
                </div>

                <div
                    className={`${styles.authForm__inputGroup} ${errors.purpose ? styles.authForm__inputGroupError : ''}`}
                    style={{position: 'relative'}}>
                    <label>Зачем ты здесь?
                        <select
                            className={styles.authForm__select}
                            {...register("purpose", {required: "Выберите цель"})}
                        >
                            {purposeOptions.map((option, index) => (
                                <option key={index} value={option.label}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                    {errors.purpose && (
                        <span className={styles.authForm__error}>{errors.purpose.message as string}</span>
                    )}
                </div>

                {error && <div className={styles.authForm__error}>{error}</div>}

                <button type="submit" className={styles.authForm__button} disabled={loading}>
                    {loading ? 'Загрузка...' : 'Зарегистрироваться'}
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;