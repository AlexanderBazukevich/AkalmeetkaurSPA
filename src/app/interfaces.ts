export interface BreadCrumb {
    label: string;
    url: any;
}

export interface Video {
    id: number;
    title: string;
    text: string;
    link: string;
    cover: string;
    purchase: boolean;
}

export interface Cause {
    id: number;
    title: string;
    text: string;
}

export interface Book {
    id: number;
    imageUrl: string;
    title: string;
    text: string;
}

export interface Section {
    imageFileName: string;
    title: string;
    subtitle?: string;
    text: string;
}

export interface Article {
    id: number;
    imageUrl: string;
    title: string;
    date: string;
    content: ArticleContent[];
}

interface ArticleContent {
    text: string;
    imageUrl?: string;
}