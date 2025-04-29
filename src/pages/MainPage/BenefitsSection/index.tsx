import styles from './index.module.css'

export const BenefitsSection = () => (
    <section className={styles.benefits_section}>
        <div className={styles.grid_container}>
            <img src='/company.svg' alt='Benefits'/>
            <div className={styles.right_column}>
                <img src='/Frame%201.svg' alt='Benefits'/>
                <img src='/pushkin-card.svg' alt='Benefits'/>
            </div>
        </div>
    </section>
)