import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private pageTitle: BehaviorSubject<string>;
  pages = [
    {
      route: '/home',
      title: 'О курсе'
    },
    {
      route: '/videos',
      title: 'Видео'
    },
    {
      route: '/library',
      title: 'Библиотека'
    },
    {
      route: '/blog',
      title: 'Блог'
    }
  ]

  constructor() {
    this.pageTitle = new BehaviorSubject<string>('О курсе');
  }

  getPages() {
    return this.pages;
  }

  setPageTitle(value) {
    this.pageTitle.next(value);
  }

  getPageTitle(): Observable<string> {
    return this.pageTitle.asObservable();
  }
}
