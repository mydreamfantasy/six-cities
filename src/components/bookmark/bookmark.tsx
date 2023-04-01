import React from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { redirectToRoute } from '../../store/action';

type BookmarkProps = {
  className: string;
  classNameSVG: string;
  type: 'card' | 'room';
  onClick: () => void;
};

const sizes = {
  card: {
    width: 18,
    height: 19,
  },
  room: {
    width: 31,
    height: 33,
  },
};

const Bookmark: React.FC<BookmarkProps> = ({
  className,
  classNameSVG,
  type,
  onClick,
}) => {
  const size = sizes[type];
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <button
      className={cn(`${className}__bookmark-button button`, className)}
      type="button"
      onClick={() => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
          onClick();
          return;
        }
        dispatch(redirectToRoute(AppRoute.Login));
      }}
    >
      <svg className={cn(classNameSVG)} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default Bookmark;
