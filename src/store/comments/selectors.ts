import { FetchStatus, NameSpace } from '../../const/const';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getComments = (state: State): Review[] =>
  state[NameSpace.Comments].comments;

export const getCommentsStatus = (state: State): FetchStatus =>
  state[NameSpace.Comments].commentsStatus;

export const getComment = (state: State): Review | null =>
  state[NameSpace.Comments].comment;

export const getCommentStatus = (state: State): FetchStatus =>
  state[NameSpace.Comments].commentStatus;
