import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer';
import { fetchOffersAction } from '../api-actions';

type OffersData = {
  offers: Offer[];
  OffersStatus: FetchStatus;
};

const initialState: OffersData = {
  offers: [],
  OffersStatus: FetchStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.OffersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.OffersStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.OffersStatus = FetchStatus.Failed;
      });
  },
});
