import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CITIES,
  FetchStatus,
  NameSpace,
  SortingTypes,
} from '../../const/const';
import { Offer } from '../../types/offer';
import { fetchOffersAction } from '../api-actions';

type OffersData = {
  city: string;
  offers: Offer[];
  sortName: string;
  isOffersDataStatus: FetchStatus;
};

const initialState: OffersData = {
  offers: [],
  city: CITIES[0],
  sortName: SortingTypes[0],
  isOffersDataStatus: FetchStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sortName = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataStatus = FetchStatus.Failed;
      });
  },
});

export const { changeCity, changeSort } = offersData.actions;
