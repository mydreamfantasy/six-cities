import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.Favorite].favorites;

export const getStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorite].favoritesStatus;

export const selectGroupedOffers = createSelector(getFavorites, (offers) =>
  offers.reduce<{ [key: string]: Offer[] }>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }

    acc[offer.city.name].push(offer);
    return acc;
  }, {})
);

export const getFavoritesStatus = createSelector([getStatus], (status) => ({
  isSuccess: status === FetchStatus.Success,
  isLoading: status === FetchStatus.Loading || status === FetchStatus.Idle,
  isError: status === FetchStatus.Failed,
}));
