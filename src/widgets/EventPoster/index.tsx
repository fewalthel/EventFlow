import styles from './index.module.scss';
import {formattedDate} from "@utils/formattedDate";
import {PosterImage} from "@widgets/PosterImage";
import {Event} from "@entities/interfaces"

interface Props {
    event: Event;
}

const EventPoster = ({event}: Props) => {
    return (
        <div className={styles.event_poster_container}>
            <PosterImage path={event?.pathToImage}/>

            <div className={styles.event_poster_container_info}>
                <p className={styles.event_title}>{event?.title}</p>
                <p className={styles.event_date}>
                    <img src="/vector-icons/calendar_icon_1.svg" alt='calendar icon' aria-readonly='false'/>
                    {formattedDate(event?.date)}
                </p>
                <p className={styles.event_location}>
                    <img src="/vector-icons/location_icon_1.svg" alt='location icon' aria-readonly='false'/>
                    {event?.location}
                </p>
                <p className={styles.event_price}>{event?.price}₽</p>
            </div>
        </div>
    )
}

export default EventPoster;