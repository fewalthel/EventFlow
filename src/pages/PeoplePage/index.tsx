import {PEOPLES} from "@utils/__mocks__";
import {useLocation} from "react-router-dom";
import {People} from "@entities/interfaces";
import {PageEntityImage} from "@widgets/PageEntityImage";
import {PageInfoCard} from "@widgets/PageInfoCard";
import {NotFoundPage} from "@pages/NotFoundPage";
import styles from './index.module.css'

export const PeoplePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idPeople: number = Number(queryParams.get('id'));
    const people: People | undefined = PEOPLES.find(people => people.id === idPeople);

    return people ? (
        <main className={styles.main}>
            <PageEntityImage path={people.pathToAvatar}/>
            <PageInfoCard entity={people}/>
            <p>{people.firstName}</p>
        </main>
    ) : <NotFoundPage/>

}