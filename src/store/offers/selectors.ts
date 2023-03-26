import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] =>
  state[NameSpace.Offers].offers;

export const getStatus = (state: State): FetchStatus =>
  state[NameSpace.Offers].isOffersDataStatus;

export const getCity = (state: State): string => state[NameSpace.Offers].city;

export const getSortType = (state: State): string =>
  state[NameSpace.Offers].sortName;

export const getOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed,
}));
