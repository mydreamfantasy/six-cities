import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { makeFakeOffers, makeFakeUserData } from '../../mocks/mocks';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const/const';
import Bookmark from './bookmark';
import { datatype } from 'faker';

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
  [NameSpace.Favorite]: {
    favorites: fakeOffers,
    favoritesStatus: FetchStatus.Success,
    changeFavoriteStatus: FetchStatus.Success,
  },
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    info: fakeUserData,
    fetchStatus: FetchStatus.Success,
  },
};

const className = datatype.string();
const classNameSVG = datatype.string();
const type = 'card';
const onClick = jest.fn();

describe('Component: Bookmark', () => {
  const store = mockStore(fakeStore);

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Bookmark
            className={className}
            classNameSVG={classNameSVG}
            type={type}
            onClick={onClick}
            isActive
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('bookmark')).toBeInTheDocument();
  });
});
