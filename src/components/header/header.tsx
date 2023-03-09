import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const/const';

type HeaderProps = {
  hasNav?: boolean;
};

const Header: React.FC<HeaderProps> = ({ hasNav = true }) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo type="header" />
        </div>
        {hasNav && (
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={AppRoute.Favorites}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  </header>
);

export default Header;
