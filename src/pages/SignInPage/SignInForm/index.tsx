import {Link} from 'react-router-dom'
import styles from './index.module.css'

export const SignInForm = () => {
    return (
        <div className={styles.form}>
            <form method='post'>
                <strong>Авторизация</strong>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit" className={styles.button}>войти</button>

                <p>Ещё нет аккаунта? Зарегестрироваться можно <span className={styles.link_to_sign_up}><Link
                    to="/sign_up">тут</Link></span></p>
            </form>
        </div>
    )
}