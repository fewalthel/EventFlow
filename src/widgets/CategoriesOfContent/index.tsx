import {FC} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {EVENT_CATEGORIES, PLACES_CATEGORIES} from "@utils/__mocks__";
import {Category} from "@entities/interfaces";
import styles from "./index.module.css";

interface Props {
    filterByCategory: Category | null;
    entity: 'Event' | 'Place';
}

export const CategoriesOfContent: FC<Props> = ({filterByCategory, entity}: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const categories: Category[] = entity === 'Event' ? EVENT_CATEGORIES : PLACES_CATEGORIES;
    const selectedStyle = entity === 'Event'
        ? styles.selected_category__events
        : styles.selected_category__places;

    const handleCategoryClick = (category: Category) => {
        if (filterByCategory?.id === category.id) {
            navigate(location.pathname);
        } else {
            const queryParams = new URLSearchParams(location.search);
            queryParams.set('categoryId', category.id.toString());
            navigate({search: queryParams.toString()});
        }
    };

    return (
        <div className={styles.categories_container}>
            {categories.map((category: Category) => (
                <button onClick={() => handleCategoryClick(category)}
                        key={category.id}
                        className={filterByCategory?.id === category.id
                            ? selectedStyle
                            : styles.default_category
                        }>
                    {category.title}
                </button>
            ))}
        </div>
    );
};
