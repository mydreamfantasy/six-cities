import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { CitiesInterface } from '../../pages/favorites/favorites';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getFavorite = (state: State): Offer[] =>
  state[NameSpace.Favorite].favorite;

export const getFavoriteStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorite].favoriteStatus;

export const groupOffers = createSelector(getFavorite, (offers) =>
  offers.reduce<CitiesInterface>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }

    acc[offer.city.name].push(offer);
    return acc;
  }, {})
);
