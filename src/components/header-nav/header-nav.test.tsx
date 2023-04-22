import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import {
  AppRoute,
  AuthorizationStatus,
  FetchStatus,
  NameSpace,
} from '../../const/const';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HeaderNav from './header-nav';
import { makeFakeUserData } from '../../mocks/mocks';

const fakeUserData = makeFakeUserData();
const mockStore = configureMockStore();

const fakeStore = {
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    info: null,
    fetchStatus: FetchStatus.Success,
  },
  [NameSpace.Favorite]: {
    favorites: [],
    favoritesStatus: FetchStatus.Success,
    changeFavoriteStatus: FetchStatus.Idle,
  },
};

describe('Component: HeaderNav', () => {
  it('should render "Sign in" link when user is not authorized', () => {
    const store = mockStore(fakeStore);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render "Sign out" link and login email when user is authorized', () => {
    const store = mockStore({
      ...fakeStore,
      [NameSpace.User]: {
        ...fakeStore[NameSpace.User],
        authorizationStatus: AuthorizationStatus.Auth,
        info: fakeUserData,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText(fakeUserData.email)).toBeInTheDocument();
  });

  it('should redirect to LoginPage when "Sign in" clicked', async () => {
    const store = mockStore(fakeStore);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path={AppRoute.Root} element={<HeaderNav />} />
            <Route path={AppRoute.Login} element={<h1>Mock login page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await act(async () => await userEvent.click(screen.getByText('Sign in')));
    expect(screen.getByText('Mock login page')).toBeInTheDocument();
  });
});
