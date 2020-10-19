import { Data } from '@angular/router';

export interface BreadCrump {
    label: string;
    url: string;
}

export interface Video {
    id: number;
    title: string;
    text: string;
    purchase: boolean;
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