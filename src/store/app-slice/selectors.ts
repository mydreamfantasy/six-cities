import { NameSpace } from '../../const/const';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.App].city;

export const getSortType = (state: State): string =>
  state[NameSpace.App].sortName;
