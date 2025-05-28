import type { EventsData } from "../types/types";

const eventsData: EventsData[] = [
  {
    "id": 1,
    "title": "Концерт группы 'Би-2'",
    "description": "Выступление легендарной рок-группы",
    "coordinates": {"lat": 56.860403, "lon": 53.286271},
    "isFavorite": false,
    "category": "music",
    "startAt": "2025-05-15T19:00:00+04:00",
    "endAt": "2025-05-15T22:00:00+04:00",
    "img": "../events_img/event_1.jpg"
  },
  {
    "id": 2,
    "title": "Фестиваль уличной еды",
    "description": "Ярмарка кулинарии и мастер-классы от шеф-поваров",
    "coordinates": { "lat": 56.840975, "lon": 53.309128 },
    "isFavorite": false,
    "category": "food",
    "startAt": "2025-06-20T10:00:00+04:00",
    "endAt": "2025-06-20T20:00:00+04:00",
    "img": "../events_img/event_2.jpg"
},
  {
    "id": 3,
    "title": "Выставка современного искусства",
    "description": "Экспозиция современных художников Удмуртии",
    "coordinates": {"lat": 56.8537, "lon": 53.2094},
    "isFavorite": false,
    "category": "art",
    "startAt": "2025-07-10T11:00:00+04:00",
    "endAt": "2025-07-10T18:00:00+04:00",
    "img": "../events_img/event_3.jpg"
},
  {
    "id": 4,
    "title": "Спортивный марафон",
    "description": "Забег на разные дистанции по улицам Ижевска",
    "coordinates": {"lat": 56.835848, "lon": 53.166383},
    "isFavorite": false,
    "category": "sport",
    "startAt": "2025-08-05T08:00:00+04:00",
    "endAt": "2025-08-05T12:00:00+04:00",
    "img": "../events_img/event_4.jpg"
},
  {
    "id": 5,
    "title": "Кинофестиваль короткометражных фильмов",
    "description": "Показ лучших работ молодых режиссёров",
    "coordinates": {"lat": 56.8537, "lon": 53.2094},
    "isFavorite": false,
    "category": "cinema",
    "startAt": "2025-09-15T14:00:00+04:00",
    "endAt": "2025-09-15T21:00:00+04:00",
    "img": "../events_img/event_5.jpg"
},
  {
    "id": 6,
    "title": "Международная выставка роботов",
    "description": "Инновационные разработки в робототехнике",
    "coordinates": {"lat": 56.860298, "lon": 53.221481},
    "isFavorite": false,
    "category": "science",
    "startAt": "2025-10-20T10:00:00+04:00",
    "endAt": "2025-10-20T18:00:00+04:00",
    "img": "../events_img/event_6.jpg"
},
  {
    "id": 7,
    "title": "Национальный праздник удмуртской культуры",
    "description": "Народные гуляния и выступления фольклорных коллективов",
    "coordinates": {"lat": 56.890909, "lon": 53.245017},
    "isFavorite": false,
    "category": "culture",
    "startAt": "2025-11-10T12:00:00+04:00",
    "endAt": "2025-11-10T19:00:00+04:00",
    "img": "../events_img/event_7.jpg"
},
  {
    "id": 8,
    "title": "Рождественская ярмарка",
    "description": "Традиционная ярмарка с угощениями и сувенирами",
    "coordinates": {"lat": 56.863435, "lon": 53.238942},
    "isFavorite": false,
    "category": "culture",
    "startAt": "2025-12-25T10:00:00+04:00",
    "endAt": "2025-12-25T20:00:00+04:00",
    "img": "../events_img/event_8.jpg"
},
  {
    "id": 9,
    "title": "Весёлый квест в центре города",
    "description": "Интерактивные задания и загадки для всей семьи",
    "coordinates": {"lat": 56.848576, "lon": 53.218926},
    "isFavorite": false,
    "category": "entertainment",
    "startAt": "2025-04-01T14:00:00+04:00",
    "endAt": "2025-04-01T18:00:00+04:00",
    "img": "../events_img/event_9.jpg"
},
  {
    "id": 10,
    "title": "Фотовыставка пейзажей Прикамья",
    "description": "Красота природы глазами фотографов региона",
    "coordinates": {"lat": 56.842179, "lon": 53.291024},
    "isFavorite": false,
    "category": "art",
    "startAt": "2025-03-15T10:00:00+04:00",
    "endAt": "2025-03-15T18:00:00+04:00",
    "img": "../events_img/event_10.jpg"
},
  {
    "id": 11,
    "title": "Городской велопарад",
    "description": "Масштабный велозаезд по улицам Ижевска",
    "coordinates": {"lat": 56.862495, "lon": 53.270356},
    "isFavorite": false,
    "category": "sport",
    "startAt": "2025-05-20T10:00:00+04:00",
    "endAt": "2025-05-20T14:00:00+04:00",
    "img": "../events_img/event_11.jpg"
},
  {
    "id": 12,
    "title": "Ночь музеев",
    "description": "Открытые двери городских музеев и тематические экскурсии",
    "coordinates": {"lat": 56.873025, "lon": 53.266305},
    "isFavorite": false,
    "category": "culture",
    "startAt": "2025-06-10T18:00:00+04:00",
    "endAt": "2025-06-10T23:00:00+04:00",
    "img": "../events_img/event_12.jpg"
},
  {
    "id": 13,
    "title": "Фестиваль народного творчества",
    "description": "Представления народных ансамблей и мастеров ремесел",
    "coordinates": {"lat": 56.863623, "lon": 53.233689},
    "isFavorite": false,
    "category": "music",
    "startAt": "2025-07-25T11:00:00+04:00",
    "endAt": "2025-07-25T19:00:00+04:00",
    "img": "../events_img/event_13.jpg"
},
  {
    "id": 14,
    "title": "Фестиваль джаза",
    "description": "Музыкальные вечера с участием известных джазовых исполнителей",
    "coordinates": {"lat": 56.872649, "lon": 53.182534},
    "isFavorite": false,
    "category": "music",
    "startAt": "2025-08-15T19:00:00+04:00",
    "endAt": "2025-08-15T22:00:00+04:00",
    "img": "../events_img/event_14.jpg"
},
  {
    "id": 15,
    "title": "Научная конференция по экологии",
    "description": "Обсуждение экологических проблем региона",
    "coordinates": {"lat": 56.864375, "lon": 53.212747},
    "isFavorite": false,
    "category": "science",
    "startAt": "2025-09-20T10:00:00+04:00",
    "endAt": "2025-09-20T17:00:00+04:00",
    "img": "../events_img/event_15.jpg"
},
  {
    "id": 16,
    "title": "Чемпионат по футболу среди любителей",
    "description": "Турнир для футбольных команд разных возрастов",
    "coordinates": {"lat": 56.842450, "lon": 53.211391},
    "isFavorite": false,
    "category": "sport",
    "startAt": "2025-10-10T10:00:00+04:00",
    "endAt": "2025-10-10T16:00:00+04:00",
    "img": "../events_img/event_16.jpg"
 },
  {
    "id": 17,
    "title": "Фестиваль этнических культур",
    "description": "Мероприятия, посвящённые традициям народов Поволжья",
    "coordinates": {"lat": 56.841803, "lon": 53.219009},
    "isFavorite": false,
    "category": "culture",
    "startAt": "2025-11-05T12:00:00+04:00",
    "endAt": "2025-11-05T19:00:00+04:00",
    "img": "../events_img/event_17.jpg"
},
  {
    "id": 18,
    "title": "Литературный фестиваль",
    "description": "Встречи с писателями и поэтическими вечерами",
    "coordinates": {"lat": 56.849294, "lon": 53.221412},
    "isFavorite": false,
    "category": "literature",
    "startAt": "2025-12-15T14:00:00+04:00",
    "endAt": "2025-12-15T20:00:00+04:00",
    "img": "../events_img/event_18.jpg"
 },
  {
    "id": 19,
    "title": "Фестиваль снежных скульптур",
    "description": "Создания ледяных фигур и конкурсы скульпторов",
    "coordinates": {"lat": 56.855004, "lon": 53.208958},
    "isFavorite": false,
    "category": "art",
    "startAt": "2025-01-20T10:00:00+04:00",
    "endAt": "2025-01-20T17:00:00+04:00",
    "img": "../events_img/event_19.jpg"
 },
  {
    "id": 20,
    "title": "Форум предпринимателей",
    "description": "Бизнес-встречи и семинары для малого бизнеса",
    "coordinates": {"lat": 56.868000, "lon": 53.228280},
    "isFavorite": false,
    "category": "business",
    "startAt": "2025-02-10T09:00:00+04:00",
    "endAt": "2025-02-10T17:00:00+04:00",
    "img": "../events_img/event_20.jpg"
}
]

export const fetchEvents = async (): Promise<EventsData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(eventsData), 500);
  });
};