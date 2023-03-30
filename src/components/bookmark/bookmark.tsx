import React from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { Link } from 'react-router-dom';

type BookmarkProps = {
  className: string;
  classNameSVG: string;
  type: 'card' | 'room';
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
}) => {
  const size = sizes[type];

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <Link
        to={AppRoute.Login}
        className={cn('button', className)}
        type="button"
      >
        <svg
          className={cn(classNameSVG)}
          width={size.width}
          height={size.height}
        >
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </Link>
    );
  }

  return (
    <button className={cn('button', className)} type="button">
      <svg className={cn(classNameSVG)} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default Bookmark;
