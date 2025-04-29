import {Place} from "@entities/interfaces";
import React, {FC, Fragment, Suspense} from "react";
import styles from "./index.module.css";
import {WaitingPlacePoster} from "widgets/WaitingPlacePoster";
import {Link} from "react-router-dom";

const LazyPlacePoster = React.lazy(() => import('widgets/PlacePoster'));

interface Props {
    placesList: Place[]
}

export const ContainerForPlaces: FC<Props> = ({placesList}: Props) => {
    return <div className={styles.container_for_posters}>
        {placesList.map((place: Place) => (
            <Fragment key={place.id}>
                <Suspense fallback={<WaitingPlacePoster/>}>
                    <Link to={`/place?id=${place.id}`}>
                        <LazyPlacePoster place={place}/>
                    </Link>
                </Suspense>
            </Fragment>
        ))}
    </div>
}