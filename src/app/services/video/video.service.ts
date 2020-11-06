import { Injectable } from '@angular/core';
import { Video } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  limit: number = 4;
  
  videos: Video[] = [
    {
      id: 0,
      title: 'Приветствие',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'y3-EJ-bqnlY',
      cover: 'url(https://img.youtube.com/vi/y3-EJ-bqnlY/0.jpg)',
      purchase: false,
      promo: true,
    },
    {
      id: 1,
      title: 'Техники дыхания',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'zpSd6ptD2Nw',
      cover: 'url(https://img.youtube.com/vi/zpSd6ptD2Nw/0.jpg)',
      purchase: true,
      promo: true,
    },
    {
      id: 2,
      title: 'Ноги направо голова налево',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: '0m2WVKXAgws',
      cover: 'url(https://img.youtube.com/vi/0m2WVKXAgws/0.jpg)',
      purchase: true,
      promo: true,
    },
    {
      id: 3,
      title: 'Женские практики',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'a8ucKz2Auak',
      cover: 'url(https://img.youtube.com/vi/a8ucKz2Auak/0.jpg)',
      purchase: false,
    },
    {
      id: 4,
      title: 'Собачка и другие асаны',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'WFnBIPUTYX8',
      cover: 'url(https://img.youtube.com/vi/WFnBIPUTYX8/0.jpg)',
      purchase: false,
    },
    {
      id: 5,
      title: 'Женские практики крупным планом',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'fP_lLxo7V34',
      cover: 'url(https://img.youtube.com/vi/fP_lLxo7V34/0.jpg)',
      purchase: false,
    }
  ];

  constructor() { }

  getVideos(params?: any) {
    /**
     *  GET
     *  /api/v1/videos
     *  
     *  filter: {
     *    page: number
     *    promo: true
     *  }
     */
    if (params.filter.promo) {
      return this.videos.filter( video => video.promo === true)
    }

    if (params.filter.page) {
      return this.videos.filter( video => {
        return video.id >= params.filter.page * this.limit && video.id < params.filter.page * this.limit + this.limit
      });
    }
  }
}
