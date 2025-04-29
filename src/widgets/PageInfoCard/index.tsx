import styles from "./index.module.scss";
import {formattedDate} from "@utils/formattedDate";
import {Event, Place, People} from "@entities/interfaces";

export const isEvent = (entity: Event | Place | People): entity is Event => {
    return "price" in entity;
};

export const isPlace = (entity: Event | Place | People): entity is Place => {
    return "coordinats" in entity;
};

interface EventInfoProps {
    event: Event;
}

const EventInfo = ({event}: EventInfoProps) => (
    <>
        <p className={styles.event_title}>{event.title}</p>
        <p className={styles.event_date}>
            <img
                src="/vector-icons/calendar_icon__white.svg"
                alt="calendar icon"
                aria-hidden="true"
            />
            {event.date ? formattedDate(event.date) : "Дата не указана"}
        </p>
        <p className={styles.event_location}>
            <img
                src="/vector-icons/location_icon_2.svg"
                alt="location icon"
                aria-hidden="true"
            />
            {event.location}
        </p>
        <p className={styles.event_price}>
            <img
                src="/vector-icons/wallet_icon.svg"
                alt="wallet icon"
                aria-hidden="true"
            />
            {event.price}₽
        </p>
        <button type="button" className={styles.button}>
            Купить билет
        </button>
    </>
);

const getMapLink = (place: Place): string => {
    const [longitude, latitude] = place.coordinats;
    return `https://yandex.ru/maps/?ll=${longitude},${latitude}&pt=${longitude},${latitude}&z=15`;
};

interface PlaceInfoProps {
    place: Place;
}

const PlaceInfo = ({place}: PlaceInfoProps) => (
    <>
        <p className={styles.event_title}>{place.title}</p>
        <p className={styles.event_location}>
            <img
                src="/vector-icons/location_icon_2.svg"
                alt="location icon"
                aria-hidden="true"
            />
            {place.location}
        </p>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={getMapLink(place)}
            className={styles.button}
        >
            Посмотреть на карте
        </a>
    </>
);

interface PeopleInfoProps {
    people: People;
}

const PeopleInfo = ({people}: PeopleInfoProps) => (
    <>
        <h1 className={styles.people_firstName}>{people.firstName}</h1>
        <h2 className={styles.people_about}>{people.about}</h2>
        {(people.city) ?
            (<h3 className={styles.people_city}>
                <img
                    src="/vector-icons/location_icon_2.svg"
                    alt="location icon"
                    aria-hidden="true"/>
                {people.city}
            </h3>) : ''
        }
        <a className={styles.button}>
            написать
        </a>
    </>
);

interface PageInfoCardProps {
    entity: Event | Place | People;
}

export const PageInfoCard = ({entity}: PageInfoCardProps) => (
    <div className={styles.event_info_container}>
        <div className={styles.event_info_inner}>
            {isEvent(entity) ? (
                <EventInfo event={entity}/>
            ) : isPlace(entity) ? (
                <PlaceInfo place={entity}/>
            ) : (
                <PeopleInfo people={entity}/>
            )}
        </div>
    </div>
);