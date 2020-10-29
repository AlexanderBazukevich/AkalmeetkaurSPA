import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video, Cause, Book, Section, Article } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  videos: Video[] = [
    {
      id: 1,
      title: 'Приветствие',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      homepage: true
    },
    {
      id: 2,
      title: 'Женские практики',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      purchase: true,
      homepage: true
    },
    {
      id: 3,
      title: 'Избавление от гнева',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      purchase: true,
      homepage: true
    },
    {
      id: 4,
      title: 'Женские практики',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
      homepage: true
    },
    {
      id: 5,
      title: 'Избавление от гнева',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).'
    },
    {
      id: 6,
      title: 'Избавление от гнева',
      text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).'
    }
  ];

  causes: Cause[] = [
    {
      id: 1,
      title: 'Жить в Осознанности, быть здесь и сейчас',
      text: 'Нет вчера, нет завтра, только то, что происходит с тобой сейчас - действительно ценно и имеет значение. Проживай этот момент, пропускай его через себя и осознавай каждой клеточкой'
    },
    {
      id: 2,
      title: 'Успокоить свой Ум',
      text: 'Неспокойный ум порождает бесконтрольные мысли и эмоции, которые в свою очередь приводят к токсичным действиям. Спокойный ум ведет к внутренней гармонии и состоянию счастья не по причине, а вопреки'
    },
    {
      id: 3,
      title: 'Наполниться внутренней энергией',
      text: 'Раскрыть свой внутренний источник энергии и сил. Не нужен никакой внешней подпитки, нужно просто знать способы и техники, как пробудить то, что в нас заложено природой'
    },
    {
      id: 4,
      title: 'Избавиться от вредных привычек',
      text: 'Кундалини йога - мощнейший инструмент, который при постоянной практике полностью искореняет вредные привычки и закрывает дорогу к ним навсегда'
    },
    {
      id: 5,
      title: 'Решить то, что мешает быть счастливым',
      text: 'Проблемы в взаимоотношениях, отсутствие любви к себе, нет процветания, страхи, внутренний гнев, привычные и не работающие паттерны поведения ума, гормональный дисбаланс все эти и многие'
    },
    {
      id: 6,
      title: 'Сохранить здоровье и молодость',
      text: 'Существует множество техник, которые позволят вам значительно улучшить ваше здоровье, сохранить молодость и будут являться мощной профилактикой и защитой перед любыми заболеваниями'
    }
  ];

  // blogs: Blog[] = [
  //   {
  //     id: 1,
  //     title: 'Что такое Шакти-данс?',
  //     date: '04.03.2019',
  //     imageUrl: './assets/images/photo_1.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Как с помощью дыхания избавиться от вредных привычек и не только',
  //     date: '04.03.2019',
  //     imageUrl: './assets/images/photo_2_580w.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'Почему кундалини Йога работает всегда. Часть 2',
  //     date: '04.03.2019',
  //     imageUrl: './assets/images/photo_3_580w.jpg',
  //   },
  //   {
  //     id: 4,
  //     title: 'Как с помощью дыхания избавиться от вредных привычек и не только',
  //     date: '04.03.2019',
  //     imageUrl: './assets/images/photo_1.png',
  //   },
  //   {
  //     id: 5,
  //     title: 'Гнев',
  //     date: '04.03.2019',
  //     imageUrl: './assets/images/photo_1.png',
  //   },
  // ]

  books: Book[] = [
    {
      id: 1,
      title: 'Дыши. Практики счастья',
      text: 'Ты стремишься к максимальной продуктивности, выполняешь одно дело за другим, гордишься многозадачностью и расписываешь свой день по минутам? Кажется, пора глубоко вдохнуть и нажать на паузу. Такая гонка не принесет ничего, кроме болезней, бессонницы и чувства тревоги. В тренде — спокойная, осознанная и счастливая жизнь.',
      imageUrl: './assets/images/book.png'
    },
    {
      id: 2,
      title: 'Стресс как внутренняя игра',
      text: 'Автор идеи о Внутренней игре Тимоти Голви показывает, как она помогает освободиться от стресса и играть в полную силу, будь то в спорте, на работе или в жизни в целом.',
      imageUrl: './assets/images/book.png'
    },
    {
      id: 3,
      title: 'Осознанность',
      text: 'Это книга об осознанной медитации, на которой основана реально работающая терапия, разработанная автором и его коллегами из Оксфордского университета. Эта методика, не только способствует излечению и предупреждению депрессий, но и помогает справиться с вызовами современного ритма жизни.',
      imageUrl: './assets/images/book.png'
    },
    {
      id: 4,
      title: 'Магия утра',
      text: 'Утренние ритуалы, которые предлагает осуществлять автор этой книги, помогли десяткам тысяч людей изменить свою жизнь, почувствовать себя лучше и успевать больше. Из книги вы узнаете, как первый час дня определяет ваш успех и позволяет вам раскрыть свой потенциал полностью.',
      imageUrl: './assets/images/book.png'
    },
  ]

  sections: Section[] = [
    {
      imageFileName: 'photo_2',
      title: 'Вероника Голубенкова',
      subtitle: 'преподаватель Кундалини йоги',
      text: `
      <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
      <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
      <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.</p>
      <p>В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
      <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
      `
    },
    {
      imageFileName: 'photo_3',
      title: 'Видеокурс Кундалини йога для начинающих',
      text: `
      <p>В рамках этого курса вы познакомитесь с теоретическими и практическими основами Кундалини йоги, узнаете как правильно и безопасно практиковать самостоятельно, изучите основные техники и на собственном опыте прочувствуете, как эти техники работают и как их можно применять в повседневной жизни.</p>
      <p>Курс состоит из 7 видео уроков и полезных материалов, среди которых 2 фундаментальные последовательности Кундалини йоги для последующей регулярных самостоятельной практики.</p>
      `
    },
  ]

  articles: Article[] = [
    {
      id: 1,
      imageUrl: './assets/images/photo_1.png',
      title: 'Что такое Шакти-данс?',
      date: '04.03.2019',
      content: [
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
          imageUrl: './assets/images/article_image_1.jpg',
        },
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
        }
      ]
    },
    {
      id: 2,
      imageUrl: './assets/images/photo_2_580w.jpg',
      title: 'Как с помощью дыхания избавиться от вредных привычек и не только',
      date: '04.03.2019',
      content: [
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
          imageUrl: './assets/images/article_image_1.jpg',
        },
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
        }
      ]
    },
    {
      id: 3,
      imageUrl: './assets/images/photo_3_580w.jpg',
      title: 'Почему кундалини Йога работает всегда. Часть 2',
      date: '04.03.2019',
      content: [
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
          imageUrl: './assets/images/article_image_1.jpg',
        },
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
        }
      ]
    },
    {
      id: 4,
      imageUrl: './assets/images/blog.jpg',
      title: 'Как с помощью дыхания избавиться от недыхания',
      date: '04.03.2019',
      content: [
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
          imageUrl: './assets/images/article_image_1.jpg',
        },
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
        }
      ]
    },
    {
      id: 5,
      imageUrl: './assets/images/photo_1.png',
      title: 'Гнев',
      date: '04.03.2019',
      content: [
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
          imageUrl: './assets/images/article_image_1.jpg',
        },
        {
          text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
        }
      ]
    },
  ]

  isAsideVisible: BehaviorSubject<boolean>;

  constructor() {
    this.isAsideVisible = new BehaviorSubject<boolean>(true);
  }

  getVideos() {
    return this.videos;
  }

  getCauses() {
    return this.causes;
  }

  getArticles() {
    return this.articles;
  }

  getArticle(id: number) {
    return this.articles[id-1];
  }

  getBooks() {
    return this.books;
  }

  getSections() {
    return this.sections;
  }

  getAsideVisibility() {
    return this.isAsideVisible.asObservable();
  }

  setAsideVisibility(value: boolean) {
    this.isAsideVisible.next(value);
  }
}
