import { FetchStatus, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getFavorite = (state: State): Offer[] =>
  state[NameSpace.Favorite].favorite;

export const getFavoriteStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorite].favoriteStatus;
