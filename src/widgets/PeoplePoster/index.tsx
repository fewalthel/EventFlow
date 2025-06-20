import styles from './index.module.scss'
import {PosterImage} from "@widgets/PosterImage";
import {People} from "@entities/interfaces";
import locationIcon1 from '../../assets/location_icon_1.svg';

interface Props {
    people: People
}

export const PeoplePoster = ({people}: Props) => {
    return (
        <div className={styles.people_poster_container}>
            <PosterImage path={people?.pathToAvatar}/>
            <div className={styles.people_poster_container_info}>
                <p className={styles.people_name}>{people?.firstName} {people?.lastName}</p>
                <p className={styles.people_about}>о себе:<br/>
                    {people?.about}</p>
                <p className={styles.people_city}>
                    <img src={locationIcon1} alt='location icon'/>
                    {people?.city}
                </p>
            </div>
        </div>
    )
}