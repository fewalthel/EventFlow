import styles from './index.module.css'
import {PosterImage} from "@widgets/PosterImage";
import {People} from "@entities/interfaces";

interface Props {
    people: People
}

export const PeoplePoster = ({people}: Props) => {
    return (
        <div className={styles.people_poster_container}>
            <PosterImage path={people.pathToAvatar}/>
            <p>{people.firstName}</p>
            <p>{people.about}</p>
            <p>{people.city}</p>
            <button className={styles.button}>написать</button>
        </div>
    )
}