import styles from './index.module.css'

interface Props {
    path: string
}

export const PageEntityImage = ({path}: Props) => {
    return (
        <div className={styles.event_image}>
            <img src={path} alt="picture of event"/>
        </div>
    )
}