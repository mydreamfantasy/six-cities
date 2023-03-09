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
  const cities = offers.reduce<CitiesInterface>((acc, offer) => {
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
              {Object.entries(cities).map((city) => (
                <li className="favorites__locations-items" key={city[0]}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city[0]}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {city[1].map((offer) => (
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
        </div>
      </main>
      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </Layout>
  );
};

export default Favorites;
