import styles from './index.module.scss'

export const PrimarySection = () => (
    <section className={styles.section}>
        <div className={styles.primary_info}>
            <h1>EventFlow</h1>
            <h2>поиск людей и единомышленников</h2>
        </div>
        <div className={styles.image_wrapper}>
        <img src='/primary-picture.svg' alt="primary image"/>
    </div>
    </section>
)