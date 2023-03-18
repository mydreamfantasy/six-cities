export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const REVIEW_STARS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'terribly' },
  { value: 1, title: 'badly' },
];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortingTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const COUNT_NEAR_OFFER = 3;
export const TIMEOUT_SHOW_ERROR = 2000;
