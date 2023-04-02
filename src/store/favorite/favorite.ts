import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const/const';
import { Offer } from '../../types/offer';
import { fetchFavoriteAction, postFavoriteAction } from '../api-actions';

type FavoriteData = {
  favorite: Offer[];
  favoriteStatus: FetchStatus;
  addOfferStatus: FetchStatus;
};

const initialState: FavoriteData = {
  favorite: [],
  favoriteStatus: FetchStatus.Idle,
  addOfferStatus: FetchStatus.Idle,
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
      })
      .addCase(postFavoriteAction.pending, (state) => {
        state.addOfferStatus = FetchStatus.Loading;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        state.addOfferStatus = FetchStatus.Success;
        if (action.payload.isFavorite) {
          state.favorite.push(action.payload);
        } else {
          state.favorite = state.favorite.filter(
            ({ id }) => id !== action.payload.id
          );
        }
      })
      .addCase(postFavoriteAction.rejected, (state) => {
        state.addOfferStatus = FetchStatus.Failed;
      });
  },
});
