import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer';
import { fetchOffersAction } from '../api-actions';

type OffersData = {
  offers: Offer[];
  offersStatus: FetchStatus;
};

const initialState: OffersData = {
  offers: [],
  offersStatus: FetchStatus.Idle,
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
      });
  },
});
