/** Адаптивные размеры для WaitingPlacePoster */
import {Skeleton} from "antd";

const getPlacePosterStyles = () => {
    if (typeof window !== 'undefined') {
        const w = window.innerWidth;
        if (w <= 960) {
            // Мобилки
            return {
                width: '90vw',
                height: '25dvh',
                borderRadius: '5vw',
                margin: '2vw auto',
            };
        } else if (w > 960 && w <= 1200) {
            // Планшеты
            return {
                width: '35vw',
                height: '22vw',
                borderRadius: '3vw',
                margin: '2vw',
            };
        } else {
            // Десктопы
            return {
                width: '27.778vw',
                height: '17.222vw',
                borderRadius: '3vw',
                margin: '1.5vw',
            };
        }
    }
    // SSR fallback
    return {
        width: '27.778vw',
        height: '17.222vw',
        borderRadius: '3vw',
        margin: '1.5vw',
    };
};

export const WaitingPlacePoster = () => {
    const styles = getPlacePosterStyles();
    return (
        <div style={{
            ...styles,
            position: 'relative',
            boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1.5vw',
            overflow: 'hidden',
            boxSizing: 'border-box'
        }}>
            <Skeleton.Avatar active size="large" shape="square" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                position: 'absolute',
                top: 0,
                borderRadius: styles.borderRadius
            }}/>
            <Skeleton active paragraph={{rows: 1}}
                      style={{
                          backgroundColor: 'rgb(72, 72, 72, 30%)',
                          borderRadius: '0 2vw 0 0',
                          position: 'absolute',
                          zIndex: 2,
                          bottom: 0,
                          padding: '1.3vw 1.528vw 1vw 1.528vw',
                          width: '80%'
                      }}/>
        </div>
    )
}