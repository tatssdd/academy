import { Home } from '../pages/Home';
import { Map } from '../pages/Map';
import { HOME_ROUTE, MAP_ROUTE } from '../utils/consts';

export const routes = [
  {
    path: HOME_ROUTE,
    Component: Home,
    label: 'Home',
  },
  {
    path: MAP_ROUTE,
    Component: Map,
    label: 'Map',
  }
];
