import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { appData } from './app-slice/app';
import { commentsData } from './comments/comments';
import { nearbyOffersData } from './nearby-offers/nearby-offer';
import { offersData } from './offers/offers';

import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.Nearby]: nearbyOffersData.reducer,
});
