import {FC} from "react";
import {EVENTS} from "@utils/__mocks__";
import EventPoster from "@widgets/EventPoster";
import styles from './index.module.css';

export const EventsSection: FC = () => (
    <section className={styles.section}>
        <h2 className={styles.title}>АФИША ПРЕДСТОЯЩИХ СОБЫТИЙ</h2>
        <div className={styles.visible_event_posters_container}>
            <div className={styles.event_posters_container}
                 style={{width: `${EVENTS.length * 20}vw`}}>
                {EVENTS.map(event => {
                    return <EventPoster event={event} key={event.id}/>
                })}
            </div>
        </div>
    </section>
)