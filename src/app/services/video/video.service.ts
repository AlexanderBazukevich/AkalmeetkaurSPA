import { Injectable } from '@angular/core';
import { Video } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  videos: Video[] = [
    {
      id: 1,
      title: 'Приветствие',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'K9YVpXiXvag',
      cover: 'http://www.you/preview.png',
      purchase: false
    },
    {
      id: 2,
      title: 'Женские практики',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'b_fKzTdMViQ',
      cover: 'http://www.you/preview.png',
      purchase: true
    },
    {
      id: 3,
      title: 'Избавление от гнева',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'b_fKzTdMViQ',
      cover: 'http://www.you/preview.png',
      purchase: true,
      
    },
    {
      id: 4,
      title: 'Женские практики',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'b_fKzTdMViQ',
      cover: 'http://www.you/preview.png',
      purchase: false,
    },
    {
      id: 5,
      title: 'Избавление от гнева',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'b_fKzTdMViQ',
      cover: 'http://www.you/preview.png',
      purchase: false,
    },
    {
      id: 6,
      title: 'Избавление от гнева',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      link: 'b_fKzTdMViQ',
      cover: 'http://www.you/preview.png',
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
     *    promo: true
     *  }
     */
      
    if (params) {
      if (params.filter.promo) {
        // return this.videos.filter(v => v.promo === true)
        return [this.videos[0], this.videos[1], this.videos[2]]
      }
    } else {
      return this.videos
    }
  }
}
