import {useLocation} from 'react-router-dom';
import {EVENTS} from '@utils/__mocks__';
import {Event} from "@entities/interfaces";
import {PageEntityImage} from "@widgets/PageEntityImage";
import {PageInfoCard} from "@widgets/PageInfoCard";
import {NotFoundPage} from "@pages/NotFoundPage";
import styles from './index.module.css';

export const EventPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idEvent: number = Number(queryParams.get('id'));
    const event: Event | undefined = EVENTS.find(event => event.id === idEvent)

    return event ? (
        <main>
            <div className={styles.event_container}>
                <PageEntityImage path={event.pathToImage}/>
                <PageInfoCard entity={event}/>
            </div>
        </main>
    ) : <NotFoundPage/>
}