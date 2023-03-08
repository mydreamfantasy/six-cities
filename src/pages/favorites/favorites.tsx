import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../../components/layout/layout';
import { Offer } from '../../types/offer';
import Logo from '../../components/logo/logo';
import Card from '../../components/card/card';

type FavoritesProps = {
  offers: Offer[];
};

const Favorites: React.FC<FavoritesProps> = ({ offers }) => {
  const cities = offers.map((offer) => offer.city.name);
  const citiesArray = cities.filter(
    (item, pos) => cities.indexOf(item) === pos
  );

  return (
    <Layout>
      <Helmet>
        <title>Six Cities. Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesArray.map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer: Offer) => {
                      if (offer.city.name === city) {
                        return (
                          <Card
                            key={offer.id}
                            offer={offer}
                            cardType="favorite"
                          />
                        );
                      }
                      return null;
                    })}
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
