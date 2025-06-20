import {useLocation} from 'react-router-dom';
import {PageEntityImage} from "@widgets/PageEntityImage";
import {PageInfoCard} from "@widgets/PageInfoCard";
import styles from './index.module.scss';
import {Event} from "@entities/interfaces";
import {EVENTS} from "@utils/__mocks__";
import {NotFoundPage} from "@pages/NotFoundPage";

export const EventPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idEvent: number = Number(queryParams.get('id'))
    const event: Event | undefined = EVENTS.find(place => place.id === idEvent);

    return event ? (
        <main className={styles.main}>
            <div className={styles.event_container}>
                <PageEntityImage path={event?.pathToImage}/>
                <PageInfoCard entity={event}/>
            </div>
            <div className={styles.container_for_secondary_info}>
                <div className={styles.event_description}>
                    {event?.description}
                </div>
            </div>
        </main>
    ) : <NotFoundPage/>
}