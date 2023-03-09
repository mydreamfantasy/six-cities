import React from 'react';

import Layout from '../../components/layout/layout';
import { Offer } from '../../types/offer';
import Logo from '../../components/logo/logo';
import Card from '../../components/card/card';

type FavoritesProps = {
  offers: Offer[];
};

interface CitiesInterface {
  [key: string]: Offer[];
}

const Favorites: React.FC<FavoritesProps> = ({ offers }) => {
  const groupedOffers = offers.reduce<CitiesInterface>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }

    acc[offer.city.name].push(offer);
    return acc;
  }, {});

  return (
    <Layout pageTitle="Favorites">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(groupedOffers).map(([name, cards]) => (
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
                      <Card key={offer.id} offer={offer} cardType="favorite" />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </Layout>
  );
};

export default Favorites;
