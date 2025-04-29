import {Skeleton} from "antd";

export const WaitingPlacePoster = () => (
    <div style={{
        width: '27.778vw',
        height: '17.222vw',
        margin: '1.5vw',
        borderRadius: '3vw',
        position: 'relative',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1.5vw',
        overflow: 'hidden',

        boxSizing: 'border-box'
    }}>
        <Skeleton.Avatar active size="large" shape="square" style={{
            width: '28.778vw',
            height: '17.222vw',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: 0
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