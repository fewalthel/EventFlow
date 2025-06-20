import {FC, useMemo} from "react";
import {EVENT_CATEGORIES, EVENTS} from "@utils/__mocks__";
import {Event} from "@entities/interfaces";
import {ContainerForEvents} from "@widgets/ContainerForEvents";
import {CategoriesOfContent} from "@widgets/CategoriesOfContent";
import {useCategoryFilter} from "@shared/hooks/useCategoryFilter";
import {NotFoundPage} from "@pages/NotFoundPage";
import styles from './index.module.css';

export const EventsPage: FC = () => {
    const filterByCategory = useCategoryFilter(EVENT_CATEGORIES);

    const filteredEvents: Event[] = useMemo(() => {
        return filterByCategory && filterByCategory !== null
            ? EVENTS.filter(event => event.category.id === filterByCategory.id)
            : EVENTS;
    }, [filterByCategory]);

    if (filterByCategory === undefined) {
        return <NotFoundPage/>;
    }

    return (
        <main>
            <h1 className={styles.h1}>СОБЫТИЯ ПО КАТЕГОРИЯМ</h1>
            <div className={styles.categories_container}>
                <CategoriesOfContent filterByCategory={filterByCategory} entity="Event"/>
            </div>
            {filteredEvents.length > 0 ? (
                <ContainerForEvents eventsList={filteredEvents}/>
            ) : (
                <div className={styles.container_for_null_posters}>
                    <p>пока что тут нет событий :(</p>
                </div>
            )}
        </main>
    );
};