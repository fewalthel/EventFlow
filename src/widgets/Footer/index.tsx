import styles from './index.module.css'
import {Link} from "react-router-dom";
import {EVENT_CATEGORIES, PLACES_CATEGORIES} from "@utils/__mocks__";
import instIcon from '../../assets/inst_icon.svg';
import telegramIcon from '../../assets/telegram_icon.svg';
import mobileIcon from '../../assets/mobile_icon.svg';
import emailIcon from '../../assets/email_icon.svg';

export const Footer = () => (
    <footer className={styles.footer}>

        <div className={styles.address_container}>
            <p className={styles.ul_title}>наши соцсети</p>
            <address>
                <ul>
                    <li>
                        <div className={styles.socials_media_container}>
                            <a><img src={instIcon}/></a>
                            <a><img src={telegramIcon}/></a>
                        </div>
                    </li>
                    <li>
                        <div className={styles.contacts_container}>
                            <a className={styles.contacts}
                               href="tel:+7 (999) 123-1234"><img src={mobileIcon}/>
                                <p>+7 (999) 123-1234</p>
                            </a>
                            <a className={styles.contacts}
                               href="mailto:eventflow@mail.com"><img src={emailIcon}/>
                                <p>eventflow@mail.com</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </address>
        </div>

        <div className={styles.links_container}>
            <p className={styles.ul_title}>необычные события</p>
            <ul>
                {EVENT_CATEGORIES.map(event =>
                    <li>
                        <Link to={`/events?categoryId=${event.id}`}>{event.title}</Link>
                    </li>
                )}
            </ul>
        </div>

        <div className={styles.links_container}>
            <p className={styles.ul_title}>необычные места</p>
            <ul> {PLACES_CATEGORIES.map(place =>
                <li>
                    <Link to={`/places?categoryId=${place.id}`}>{place.title}</Link>
                </li>
            )}
            </ul>
        </div>
    </footer>
)