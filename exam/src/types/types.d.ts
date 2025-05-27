import { RouteType } from '../app/routes';

declare module '../app/routes' {
  export const routs: RouteType[];
}

export type CoordinatesType = [number, number];

export interface IAddress {
  location: string;
  route: string;
}

export interface IClickEvent {
  get: (key: string) => CoordinatesType;
}

export interface YandexMapProps {
  center: CoordinatesType;
  onMapClick: (coords: CoordinatesType) => void;
  markerCoords?: CoordinatesType;
  userAddress: IAddress | null;
  placemarks: EventsData[]
}

export interface EventsData {
  id: number;
  title: string;
  description: string;
  coordinates: { lat: number; lon: number };
  isFavorite: boolean;
  category: string;
  startAt: string;
  endAt: string;
  img: string;
}

export interface EventState {
  events: EventsData[];
  setEvents: (events: EventsData[]) => void;
  toggleFavorite: (id: number) => void;
}

export interface LocationDetailsProps {
  address: IAddress | null;
  event?: EventsData | null;
}

export interface GeocodeMapProps {
  events: EventsData[];
}

export interface HomeEventCardProps {
  title: string;
  description: string;
}