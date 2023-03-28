import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer } from '../types/offer';
import { PostReview, Review } from '../types/review';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute } from '../const/const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  } catch (err) {
    throw err;
  }
});

export const fetchCommentsAction = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/comments', async (id, { extra: api }) => {
  try {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments }${id}`);
    return data;
  } catch (err) {
    throw err;
  }
});

export const postCommentAction = createAsyncThunk<
  Review,
  PostReview,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/comment', async ({ comment, rating, id }, { extra: api }) => {
  try {
    const { data } = await api.post<Review>(`${APIRoute.Comments }${id}`, {
      comment,
      rating,
    });
    return data;
  } catch (err) {
    throw err;
  }
});

export const fetchNearbyAction = createAsyncThunk<
  Offer[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers }/${id}/nearby`);
    return data;
  } catch (err) {
    throw err;
  }
});

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  } catch (err) {
    throw err;
  }
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (err) {
      throw err;
    }
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
  } catch (err) {
    throw err;
  }
});
