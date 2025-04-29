import {useState, useEffect, useMemo} from "react";
import {useLocation} from "react-router-dom";
import {Category} from "@entities/interfaces";

export const useCategoryFilter = (categories: Category[]) => {
    const location = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
    const categoryParam = queryParams.get('categoryId');
    const categoryId = Number(categoryParam);

    const [filterByCategory, setFilterByCategory] = useState<Category | null | undefined>(undefined);

    useEffect(() => {
        if (categoryParam === null) {
            setFilterByCategory(null);
        } else {
            if (isNaN(categoryId)) {
                setFilterByCategory(undefined);
            } else {
                const foundCategory = categories.find(category => category.id === categoryId);
                setFilterByCategory(foundCategory ?? undefined);
            }
        }
    }, [categoryParam, categoryId, categories]);

    return filterByCategory;
};