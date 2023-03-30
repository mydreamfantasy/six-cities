import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer';
import { fetchFavoriteAction } from '../api-actions';

type FavoriteData = {
  favorite: Offer[];
  favoriteStatus: FetchStatus;
};

const initialState: FavoriteData = {
  favorite: [],
  favoriteStatus: FetchStatus.Idle,
};

export const favoriteData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.favoriteStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.favorite = action.payload;
        state.favoriteStatus = FetchStatus.Success;
      })
      .addCase(fetchFavoriteAction.rejected, (state) => {
        state.favoriteStatus = FetchStatus.Failed;
      });
  },
});
