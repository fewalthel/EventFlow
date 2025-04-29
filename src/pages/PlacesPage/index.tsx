import {FC, useMemo} from "react";
import {EVENT_CATEGORIES, PLACES} from "@utils/__mocks__";
import {Place} from "@entities/interfaces";
import {ContainerForPlaces} from "@widgets/ContainerForPlaces";
import {CategoriesOfContent} from "@widgets/CategoriesOfContent";
import {useCategoryFilter} from "@shared/hooks/useCategoryFilter";
import {NotFoundPage} from "@pages/NotFoundPage";
import styles from './index.module.css';

export const PlacesPage: FC = () => {
    const filterByCategory = useCategoryFilter(EVENT_CATEGORIES);

    const filteredPlaces: Place[] = useMemo(() => {
        return filterByCategory && filterByCategory !== null
            ? PLACES.filter(place => place.category.id === filterByCategory.id)
            : PLACES;
    }, [filterByCategory]);

    if (filterByCategory === undefined) {
        return <NotFoundPage/>;
    }

    return (
        <main>
            <h1>ИНТЕРЕСНЫЕ МЕСТА ПО КАТЕГОРИЯМ</h1>
            <CategoriesOfContent filterByCategory={filterByCategory} entity="Place"/>
            {filteredPlaces.length > 0 ? (
                <ContainerForPlaces placesList={filteredPlaces}/>
            ) : (
                <div className={styles.container_for_null_posters}>
                    <p>пока что тут нет интересных мест :(</p>
                </div>
            )}
        </main>
    );
};