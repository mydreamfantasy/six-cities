import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const/const';
import { UserData } from '../../types/user-data';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  info: null | UserData;
  fetchStatus: FetchStatus;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  info: null,
  fetchStatus: FetchStatus.Idle,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.fetchStatus = FetchStatus.Success;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.fetchStatus = FetchStatus.Failed;
      })
      .addCase(loginAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.info = action.payload;
        state.fetchStatus = FetchStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.fetchStatus = FetchStatus.Failed;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.info = null;
        state.fetchStatus = FetchStatus.Idle;
      });
  },
});
