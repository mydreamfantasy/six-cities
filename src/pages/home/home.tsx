import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../../components/layout/layout';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { Offer } from '../../types/offer';

type HomeProps = {
  offersCount: number;
  offers: Offer[];
};

const Home: React.FC<HomeProps> = ({ offersCount, offers }) => (
  <Layout className="page--gray page--main" hasNav>
    <Helmet>
      <title>Six Cities. Home</title>
    </Helmet>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offersCount} places to stay in Amsterdam
            </b>
            <Sort />
            <ListOffers offers={offers} />
          </section>
          <div className="cities__right-section">
            <Map className="cities__map" />
          </div>
        </div>
      </div>
    </main>
  </Layout>
);
export default Home;
