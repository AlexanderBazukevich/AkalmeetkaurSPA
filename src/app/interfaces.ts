export interface BreadCrumb {
    label: string;
    url: any;
}

export interface Video {
    id: number;
    title: string;
    text: string;
    purchase?: boolean;
    homepage?: boolean;
    first?: boolean;
}

export interface Cause {
    id: number;
    title: string;
    text: string;
}

export interface Blog { 
    id: number;
    title: string;
    date: string;
    imageUrl: string;
}

export interface Book {
    id: number;
    imageUrl: string;
    title: string;
    text: string;
}

export interface Section {
    imageTitle: string;
    title: string;
    subtitle?: string;
    text: string;
}