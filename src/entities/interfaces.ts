export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
    GUEST = 'GUEST',
    ORGANIZER = 'ORGANIZER',
    PLATFORM = 'PLATFORM',
    SUPER = 'SUPER'
}

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
    role: Role
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
    place?: Place
}

export interface Place {
    id: number,
    title: string;
    location: string;
    description: string;
    category: Category;
    pathToImage: string;
    coordinats: number[]
}

export interface Category {
    id: number,
    title: string;
}