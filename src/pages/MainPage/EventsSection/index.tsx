import React, {FC, Fragment, Suspense} from "react";
import {EVENTS} from "@utils/__mocks__";
import styles from './index.module.scss';
import {WaitingEventPoster} from "@widgets/WaitingEventPoster";
import {Link} from "react-router-dom";

const LazyEventPoster = React.lazy(() => import('widgets/EventPoster'));

export const EventsSection: FC = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>АФИША ПРЕДСТОЯЩИХ СОБЫТИЙ</h2>
            <div className={styles.visible_event_posters_container}>
                <div className={styles.event_posters_container}
                     style={{width: `${EVENTS.length * 20}vw`}}>
                    {EVENTS.map(event => (
                        <Fragment key={event.id}>
                            <Suspense fallback={<WaitingEventPoster/>}>
                                <Link to={`/event?id=${event.id}`}>
                                    <LazyEventPoster event={event}/>
                                </Link>
                            </Suspense>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}