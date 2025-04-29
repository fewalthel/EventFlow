import {Skeleton} from "antd";

export const WaitingEventPoster = () => (
    <div style={{
        boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1.5vw',
        margin: '1.5vw', width: '20vw',
        borderRadius: '2vw',
        boxSizing: 'border-box', position: 'relative'
    }}>
        <Skeleton.Avatar active size="large" shape="square" style={{
            width: '20vw',
            height: '15vw',
            borderRadius: '2vw',
            position: 'absolute', top: 0
        }}/>
        <Skeleton active paragraph={{rows: 4}}
                  style={{
                      width: '17vw',
                      margin: '1.5vw',
                      paddingTop: '1vw',
                      marginTop: '14vw',
                      height: '15vw'
                  }}/>
    </div>
)