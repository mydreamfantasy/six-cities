import { FetchStatus } from '../../const/const';
import { changeFavoriteAction, fetchFavoritesAction } from '../api-actions';
import { makeFakeOffer } from '../../mocks/mocks';
import { FavoritesData } from '../../types/state';
import { datatype } from 'faker';
import { favoritesData } from './favorites';

const favorite = makeFakeOffer();
const favorites = Array.from({ length: datatype.number(10) }, () =>
  makeFakeOffer()
);

describe('Reducer: nearbyOffersData', () => {
  let initialState: FavoritesData;

  beforeEach(() => {
    initialState = {
      favorites: [],
      favoritesStatus: FetchStatus.Idle,
      changeFavoriteStatus: FetchStatus.Idle,
    };
  });
  it('without additional parameters should return initial state', () => {
    expect(favoritesData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState
    );
  });

  describe('fetchFavoritesAction test', () => {
    it('should update favoritesStatus to "Loading" when pending', () => {
      expect(
        favoritesData.reducer(initialState, {
          type: fetchFavoritesAction.pending.type,
        })
      ).toEqual({ ...initialState, favoritesStatus: FetchStatus.Loading });
    });

    it('should update favoritesStatus by load favorites', () => {
      expect(
        favoritesData.reducer(initialState, {
          type: fetchFavoritesAction.fulfilled.type,
          payload: favorites,
        })
      ).toEqual({
        ...initialState,
        favorites,
        favoritesStatus: FetchStatus.Success,
      });
    });

    it('should update favoritesStatus failed if server is unavailable', () => {
      expect(
        favoritesData.reducer(initialState, {
          type: fetchFavoritesAction.rejected.type,
        })
      ).toEqual({ ...initialState, favoritesStatus: FetchStatus.Failed });
    });
  });
  describe('changeFavoriteAction test', () => {
    it('should update favoritesStatus to "Loading" when pending', () => {
      expect(
        favoritesData.reducer(initialState, {
          type: changeFavoriteAction.pending.type,
        })
      ).toEqual({ ...initialState, changeFavoriteStatus: FetchStatus.Loading });
    });

    it('should update favoritesStatus by load favorites', () => {
      expect(
        favoritesData.reducer(initialState, {
          type: changeFavoriteAction.fulfilled.type,
          payload: favorite,
        })
      ).toEqual({
        ...initialState,
        favorites: [favorite],
        changeFavoriteStatus: FetchStatus.Success,
      });
    });

    it('should update favoritesStatus failed if server is unavailable', () => {
      expect(
        favoritesData.reducer(initialState, {
          type: changeFavoriteAction.rejected.type,
        })
      ).toEqual({ ...initialState, changeFavoriteStatus: FetchStatus.Failed });
    });
  });
});
