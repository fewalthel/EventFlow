import {FC} from 'react'
import {useLocation} from "react-router-dom";
import {PLACES} from "@utils/__mocks__";
import {Place} from "@entities/interfaces";
import {PageInfoCard} from "@widgets/PageInfoCard";
import {PageEntityImage} from "@widgets/PageEntityImage";
import {NotFoundPage} from "@pages/NotFoundPage";
import {Map} from "@widgets/Map"
import styles from './index.module.scss'

export const PlacePage: FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idPlace: number = Number(queryParams.get('id'));
    const place: Place | undefined = PLACES.find(place => place.id === idPlace);

    return place ? (
        <main className={styles.main}>
            <div className={styles.event_container}>
                <PageEntityImage path={place.pathToImage}/>
                <PageInfoCard entity={place}/>
            </div>
            <div className={styles.container_for_secondary_info}>

                <div className={styles.place_description}>
                    {place.description}
                </div>

                <div className={styles.map}>
                    <Map place={place}/>
                </div>
            </div>
        </main>) : <NotFoundPage/>
}