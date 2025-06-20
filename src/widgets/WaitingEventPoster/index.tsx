/** Адаптивные размеры для WaitingEventPoster */
import {Skeleton} from "antd";

const getPosterStyles = () => {
    if (typeof window !== 'undefined') {
        const w = window.innerWidth;
        if (w <= 960) {
            // Мобилки
            return {
                width: '43vw',
                height: '48vh',
                borderRadius: '3vw',
                margin: '1vw',
            };
        } else if (w > 960 && w <= 1200) {
            // Планшеты
            return {
                width: '25vw',
                height: '18vw',
                borderRadius: '2vw',
                margin: '2vw',
            };
        } else {
            // Десктопы
            return {
                width: '20vw',
                height: '15vw',
                borderRadius: '2vw',
                margin: '1.5vw',
            };
        }
    }
    // SSR fallback
    return {
        width: '20vw',
        height: '15vw',
        borderRadius: '2vw',
        margin: '1.5vw',
    };
};

export const WaitingEventPoster = () => {
    const styles = getPosterStyles();
    return (
        <div style={{
            boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1.5vw',
            ...styles,
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Skeleton.Avatar active size="large" shape="square" style={{
                width: '100%',
                height: '60%',
                borderRadius: styles.borderRadius,
                position: 'absolute', top: 0
            }}/>
            <Skeleton active paragraph={{rows: 4}}
                      style={{
                          width: '90%',
                          margin: '0 auto',
                          paddingTop: '1vw',
                          marginTop: '60%',
                          height: '35%',
                          borderRadius: styles.borderRadius
                      }}/>
        </div>
    )
}