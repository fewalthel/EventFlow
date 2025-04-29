import {FC, useEffect, useRef} from "react";
import {Place} from "@entities/interfaces";

declare global {
    interface Window {
        ymaps: any;
    }
}

type Props = {
    place: Place;
};

export const Map: FC<Props> = ({place}: Props) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadMap = () => {
            if (!place?.coordinats || !Array.isArray(place.coordinats) || place.coordinats.length !== 2) {
                console.error("Invalid coordinates");
                return;
            }

            if (!mapRef.current) {
                console.error("Map container is not available");
                return;
            }

            window.ymaps.ready(() => {
                const myMap = new window.ymaps.Map(mapRef.current, {
                    center: place.coordinats,
                    zoom: 14,
                    controls: ['zoomControl'],
                });

                const myPlacemark = new window.ymaps.Placemark(place.coordinats, {
                    preset: 'islands#icon',
                    draggable: false,
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/vector-icons/pointer_location.svg',
                    iconImageSize: [40, 40],
                    iconImageOffset: [-20, -40],
                });

                myMap.geoObjects.add(myPlacemark);
            });
        };

        if (!window.ymaps) {
            const script = document.createElement("script");
            script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
            script.type = "text/javascript";
            script.onload = loadMap;
            document.head.appendChild(script);
        } else {
            loadMap();
        }
    }, [place]);

    return <div ref={mapRef} style={{width: "100%", height: "400px"}}/>;
};