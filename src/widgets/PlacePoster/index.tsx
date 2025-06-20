import {Place} from "@entities/interfaces";
import styles from './index.module.scss'

interface Props {
    place: Place;
}

const PlacePoster = ({place}: Props) => {
    return (
        <div className={styles.place_poster_container}>
            <img alt="place poster image" src={place.pathToImage}/>
            <div className={styles.place_poster_container_info}>
                <p className={styles.place_title}>{place?.title} </p>
                <p className={styles.location}>
                    <img src="/vector-icons/location_icon_2.svg"/>
                    {place?.location}
                </p>
            </div>
        </div>
    )
}

export default PlacePoster;