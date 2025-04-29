import {Category, People, Place, Event} from "@entities/interfaces";

export const PEOPLES: People[] = [
    {
        id: 1,
        firstName: 'Михаил',
        lastName: 'Абрамский',
        about: 'директор ИТИС КФУ',
        pathToAvatar: 'michael.jpg',
        login: 'abramichael',
        role: 'USER',
        email: "abramichael@mail.com",
        city: 'Казань',
        isPublicProfile: true
    }
]

export const PLACES_CATEGORIES: Category[] = [
    {
        id: 1,
        title: 'арт-пространства'
    },
    {
        id: 2,
        title: 'кофейни'
    },
    {
        id: 3,
        title: 'бары'
    },
    {
        id: 4,
        title: 'театры'
    }
]

export const EVENT_CATEGORIES: Category[] = [
    {
        id: 1,
        title: 'ментальное здоровье'
    },
    {
        id: 2,
        title: 'концерты'
    },
    {
        id: 3,
        title: 'выставки'
    },
    {
        id: 4,
        title: 'вечеринки'
    }
]

export const PLACES: Place[] = [
    {
        id: 1,
        title: 'Filter Coffee',
        location: 'ул. Габдулы Тукая, 71',
        category: {
            id: 2,
            title: 'кофейни'
        },
        pathToImage: 'filter.jpg',
        coordinats: [55.777798, 49.115909],
        description: 'Кофейня «Фильтр» — это место, где вы можете насладиться ароматным кофе, попробовать сезонные напитки, такие как «Татарский бабл-ти» и «Сезонная боба», а также купить одежду и другие товары.'
    },
    {
        id: 2,
        title: 'Corner coffee spot',
        location: 'ул. Кави Наджми, 8А',
        category: {
            id: 2,
            title: 'кофейни'
        },
        pathToImage: 'corner.jpg',
        coordinats: [55.789881, 49.114364],
        description: 'Corner coffee spot — это уютное место с лофт-дизайном, где можно провести время в приятной компании.'
    },
    {
        id: 3,
        title: 'Ранняя пташка',
        location: 'ул. Астрономическая, 17',
        category: {
            id: 2,
            title: 'кофейни'
        },
        description: 'Кофейня «Ранняя пташка» — это место, где можно начать свой день с вкусного завтрака. По будням завтраки подают до двух часов дня, а по выходным — до четырех.',
        pathToImage: 'rannaya-ptashka.jpg',
        coordinats: [55.791197, 49.118164]
    },
    {
        id: 4,
        title: 'Coffee Dream',
        location: 'ул. Калинина, 63',
        category: {
            id: 2,
            title: 'кофейни'
        },
        description: 'Кофейня Coffee Dream — это место, где можно насладиться хорошим кофе в уютной атмосфере. Здесь приятно отдохнуть, поработать или встретиться с друзьями.',
        pathToImage: 'coffee-dream.svg',
        coordinats: [55.783240, 49.147117]
    },
    {
        id: 5,
        title: 'Храм всех религий',
        location: 'ул. Старо-Аракчинская, 4',
        category: {
            id: 1,
            title: 'арт-пространства'
        },
        pathToImage: 'hram.jpg',
        description: 'Храм всех религий — это архитектурное сооружение в Казани, посвященное разным религиям мира. Храм был основан Ильдаром Хановым в 1993 году и строился на его пожертвования. В общей планировке проекта принимал участие Святослав Рерих, сын Николая Рериха.',
        coordinats: [55.800559, 48.974865]
    }
]

export const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Фестиваль медиаискусства НУР',
        date: '2025-05-22',
        location: 'Казань',
        price: 2000,
        pathToImage: '/nur-concert.svg',
        category: {
            id: 3,
            title: 'выставки'
        }
    },

    {
        id: 2,
        title: 'Йога в парке',
        date: '2025-06-13',
        location: 'Парк Тысячелетия Казани',
        price: 600,
        pathToImage: 'yoga.svg',
        category:
            {
                id: 1,
                title: 'ментальное здоровье'
            }
    },
    {
        id: 3,
        title: 'Джазовый концерт',
        date: '2025-04-02',
        location: 'Казанская филармония',
        price: 1000,
        pathToImage: 'jazz_concert_picture.svg',
        category: {
            id: 2,
            title: 'концерты'
        }
    },
    {
        id: 4,
        title: 'Zoloto',
        date: '2025-04-01',
        location: 'KORSTON CLUB',
        price: 2300,
        pathToImage: 'zoloto.svg',
        category: {
            id: 2,
            title: 'концерты'
        }
    },
    {
        id: 5,
        title: 'Thomas Mraz',
        date: '2025-04-16',
        location: 'Werk',
        price: 1400,
        pathToImage: 'mraz.jpeg',
        category: {
            id: 2,
            title: 'концерты'
        }
    },
    {
        id: 6,
        title: 'Alblack 52',
        date: '2025-04-19',
        location: 'Twin Arena',
        price: 1400,
        pathToImage: '52.png',
        category: {
            id: 2,
            title: 'концерты'
        }
    },
    {
        id: 7,
        title: 'Yanix',
        date: '2025-04-11',
        location: 'KORSTON CLUB',
        price: 2300,
        pathToImage: 'yanix.png',
        category: {
            id: 2,
            title: 'концерты'
        }
    }
]