import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {
  AuthorizationStatus,
  CITIES,
  FetchStatus,
  NameSpace,
  SortingTypes,
} from '../../const/const';
import { makeFakeOffers, makeFakeUserData } from '../../mocks/mocks';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import Favorites from './favorites';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const fakeOffers = makeFakeOffers();
const fakeUserData = makeFakeUserData();

const fakeStore = {
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    info: fakeUserData,
    fetchStatus: FetchStatus.Success,
  },
  [NameSpace.Offers]: {
    offers: fakeOffers,
    offersStatus: FetchStatus.Success,
  },
  [NameSpace.Favorite]: {
    favorites: [],
    favoritesStatus: FetchStatus.Success,
    changeFavoriteStatus: FetchStatus.Idle,
  },
  [NameSpace.App]: {
    city: CITIES[0],
    sortName: SortingTypes[0],
  },
};

describe('Page: Favorites', () => {
  it('should render correctly if data received and favorites are empty', () => {
    const store = mockStore(fakeStore);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HelmetProvider>
            <Favorites />
          </HelmetProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });

  it('should render correctly if data pending', () => {
    const store = mockStore({
      ...fakeStore,
      [NameSpace.Favorite]: {
        ...fakeStore[NameSpace.Favorite],
        favoritesStatus: FetchStatus.Loading,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HelmetProvider>
            <Favorites />
          </HelmetProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('should render correctly if data received', () => {
    const store = mockStore({
      ...fakeStore,
      [NameSpace.Favorite]: {
        ...fakeStore[NameSpace.Favorite],
        favorites: fakeOffers,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HelmetProvider>
            <Favorites />
          </HelmetProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
});
