import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const/const';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { changeCity, updateOffers } from './action';

type InitialState = {
  city: string;
  offers: Offer[];
};

const initialState: InitialState = {
  offers: offers.filter(({ city }) => city.name === CITIES[0]),
  city: CITIES[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffers, (state) => {
      state.offers = offers.filter(({ city }) => city.name === state.city);
    });
});

export { reducer };
