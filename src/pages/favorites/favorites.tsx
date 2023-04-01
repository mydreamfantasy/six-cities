import React from 'react';

import Layout from '../../components/layout/layout';
import { Offer } from '../../types/offer';
import Logo from '../../components/logo/logo';
import Card from '../../components/card/card';
import { useAppSelector } from '../../hooks';
import { groupOffers } from '../../store/favorite/selectors';

export interface CitiesInterface {
  [key: string]: Offer[];
}

const Favorites: React.FC = () => {
  const offers = useAppSelector(groupOffers);

  // const groupedOffers = offers.reduce<CitiesInterface>((acc, offer) => {
  //   if (!acc[offer.city.name]) {
  //     acc[offer.city.name] = [];
  //   }

  //   acc[offer.city.name].push(offer);
  //   return acc;
  // }, {});

  return (
    <Layout pageTitle="Favorites">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(offers).map(([name, cards]) => (
                  <li className="favorites__locations-items" key={name}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{name}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cards.map((offer) => (
                        <Card
                          key={offer.id}
                          offer={offer}
                          cardType="favorite"
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </Layout>
  );
};

export default Favorites;
