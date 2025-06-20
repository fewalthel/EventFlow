import {useState, useMemo} from "react";
import {EVENTS, PEOPLES, PLACES} from "@utils/__mocks__";
import {Event, Place, People} from "@entities/interfaces";
import {ContainerForPlaces} from "@widgets/ContainerForPlaces";
import {ContainerForEvents} from "@widgets/ContainerForEvents";
import styles from "./index.module.css";
import {PeoplePoster} from "@widgets/PeoplePoster";
import {Link} from "react-router-dom";

type SearchCategory = 'places' | 'events' | 'peoples';
type SearchEntity = Place | Event | People;

export const SearchPage = () => {
    const [searchCategory, setSearchCategory] = useState<SearchCategory>('places');
    const [searchQuery, setSearchQuery] = useState('');

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];

        const queryRegex = new RegExp(searchQuery, 'i');
        let results: SearchEntity[] = [];

        switch (searchCategory) {
            case 'places':
                results = PLACES.filter(place => place.title.match(queryRegex));
                break;
            case 'events':
                results = EVENTS.filter(event => event.title.match(queryRegex));
                break;
            case 'peoples':
                results = PEOPLES.filter(person => person.firstName.match(queryRegex));
                break;
        }
        return results;
    }, [searchCategory, searchQuery]);

    const handleCategoryChange = (category: SearchCategory) => {
        return () => setSearchCategory(category);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const categories: { id: SearchCategory; label: string }[] = [
        {id: 'places', label: 'Места'},
        {id: 'events', label: 'События'},
        {id: 'peoples', label: 'Люди'}
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Что ищем?</h1>

            <div className={styles.categories_container}>
                {categories.map(({id, label}) => (
                    <button
                        key={id}
                        onClick={handleCategoryChange(id)}
                        className={searchCategory === id ? styles.selected_category : styles.default_category}
                        aria-current={searchCategory === id}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className={styles.searchBox}>
                <input
                    type="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="введите запрос"
                    className={styles.search_input}
                    aria-label="поисковый запрос"
                />
                <button className={styles.searchButton}>найти</button>
            </div>

            <div className={styles.results}>
                {searchQuery ? (
                    searchResults.length > 0 ? (() => {
                            switch (searchCategory) {
                                case 'events':
                                    return <ContainerForEvents eventsList={searchResults as Event[]}/>
                                case 'places':
                                    return <ContainerForPlaces placesList={searchResults as Place[]}/>
                                default:
                                    return <div className={styles.resultsList}>
                                        {(searchResults as People[]).map(people => (
                                            <Link to={`/people?id=${people.id}`}>
                                                <PeoplePoster key={people.id} people={people}/>
                                            </Link>
                                        ))}
                                    </div>
                            }
                        }
                    )() : (
                        <p className={styles.noResults}>ничего не нашли :(</p>
                    )
                ) : (
                    <p className={styles.hint}>начните поиск</p>
                )}
            </div>
        </main>
    );
};