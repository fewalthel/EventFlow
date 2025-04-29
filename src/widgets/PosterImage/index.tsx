import styles from './index.module.css'
import {FC} from 'react';

interface Props {
    path: string
}

export const PosterImage: FC<Props> = ({path}: Props) => {
    return <div className={styles.poster_image}>
        <img src={path} alt="picture of event"/>
    </div>
}