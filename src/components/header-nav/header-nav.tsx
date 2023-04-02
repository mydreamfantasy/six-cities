import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getOffers } from '../../store/offers/selectors';
import {
  getAuthorizationStatus,
  getInfo,
} from '../../store/user-process/selectors';
import { UserData } from '../../types/user-data';

type UserLoggedProps = {
  info: UserData;
  length: number | null;
};

const UserLogged: React.FC<UserLoggedProps> = ({ info, length }) => {
  const { avatarUrl, email } = info;

  const dispatch = useAppDispatch();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          to={AppRoute.Favorites}
          className="header__nav-link header__nav-link--profile"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              className="user__avatar"
              src={avatarUrl}
              width="54"
              height="54"
              alt="User avatar"
            />
          </div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href="/#"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </ul>
  );
};

const UserNotLogged: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a
          className="header__nav-link header__nav-link--profile"
          href="/#"
          onClick={(evt) => {
            evt.preventDefault();
            navigate(AppRoute.Login);
          }}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__login">Sign in</span>
        </a>
      </li>
    </ul>
  );
};

const HeaderNav: React.FC = () => {
  const info = useAppSelector(getInfo);
  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoritesOffersLenght = offers.filter(
    (offer) => offer.isFavorite
  ).length;

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  if (!isAuth || info === null) {
    return (
      <nav className="header__nav">
        <UserNotLogged />
      </nav>
    );
  }

  return (
    <nav className="header__nav">
      {isAuth && <UserLogged info={info} length={favoritesOffersLenght} />}
    </nav>
  );
};

export default HeaderNav;
