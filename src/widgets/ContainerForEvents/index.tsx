import {Event} from "@entities/interfaces";
import React, {FC, Fragment, Suspense} from "react";
import styles from "./index.module.css";
import {WaitingEventPoster} from "widgets/WaitingEventPoster";
import {Link} from "react-router-dom";

const LazyEventPoster = React.lazy(() => import('widgets/EventPoster'));

interface Props {
    eventsList: Event[]
}

export const ContainerForEvents: FC<Props> = ({eventsList}: Props) => {
    return <div className={styles.container_for_posters}>
        {eventsList.map((event: Event) => (
            <Fragment key={event.id}>
                <Suspense fallback={<WaitingEventPoster/>}>
                    <Link to={`/event?id=${event.id}`}>
                        <LazyEventPoster event={event}/>
                    </Link>
                </Suspense>
            </Fragment>
        ))}
    </div>
}