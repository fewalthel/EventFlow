import styles from './index.module.css'
import {Link} from "react-router-dom";

export const NotFoundPage = () => (
    <main className={styles.main}>
        <div className={styles.container}>
            <p>404</p>
            <div>
                <p>похоже, ты заблудился, ведь тут ничего нет :(</p>
                <p>но ты всегда можешь вернуться <Link to="/">на главную</Link></p>
            </div>
        </div>
    </main>
)