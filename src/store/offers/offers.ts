import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { OffersData } from '../../types/state';
import {
  changeFavoriteAction,
  fetchOffersAction,
  fetchPropertyOfferAction,
} from '../api-actions';

const initialState: OffersData = {
  offers: [],
  offersStatus: FetchStatus.Idle,
  offer: null,
  offerStatus: FetchStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
      })
      .addCase(fetchPropertyOfferAction.pending, (state) => {
        state.offerStatus = FetchStatus.Loading;
      })
      .addCase(fetchPropertyOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerStatus = FetchStatus.Success;
      })
      .addCase(fetchPropertyOfferAction.rejected, (state) => {
        state.offerStatus = FetchStatus.Failed;
      })
      .addCase(changeFavoriteAction.fulfilled, (state, action) => {
        state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });

        if (state.offer?.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });
  },
});
