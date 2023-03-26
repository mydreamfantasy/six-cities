import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { offersData } from './offers/offers';

import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
