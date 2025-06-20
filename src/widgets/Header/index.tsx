import {Link} from "react-router-dom";
import styles from './index.module.scss'
import {FC, useState, useEffect} from "react";

interface HeaderProps {
    onSignInClick?: () => void;
}

export const Header: FC<HeaderProps> = ({ onSignInClick }) => {
    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 50));
            setLastScrollY(currentScrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollY])

    return (
        <header className={`${styles.desktop_header} ${showHeader ? styles.show : styles.hide}`}>
            <nav className={styles.desktop_header_nav}>
                <ul>
                    <li>
                        <a href="/#about" className={styles.header_link}>
                            о проекте
                        </a>
                    </li>
                    <li>
                        <Link to="/events" className={styles.header_link}>
                            события
                        </Link>
                    </li>
                    <li>
                        <Link to="/places" className={styles.header_link}>
                            места
                        </Link>
                    </li>
                    <li className={styles.primary_buttons}>
                        <button type="button" className={styles.button} onClick={onSignInClick}>
                            войти
                        </button>
                        <Link className={styles.search_button} to="/search"/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}