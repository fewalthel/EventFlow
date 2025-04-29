export interface People {
    id: number,
    about?: string,
    pathToAvatar: string,
    login: string,
    email: string,
    firstName: string,
    lastName: string,
    city?: string,
    isPublicProfile: boolean,
    role: 'USER' | 'ADMIN' | 'GUEST' | 'ORGANIZER' | 'PLATFORM' | 'SUPER'
}

export interface Event {
    id: number,
    title: string,
    date: string,
    location: string,
    price: number,
    pathToImage: string,
    description?: string,
    category: Category
}

export interface Place {
    id: number,
    title: string;
    location: string;
    description: string;
    category: Category;
    pathToImage?: string;
    coordinats: number[]
}

export interface Category {
    id: number,
    title: string;
}