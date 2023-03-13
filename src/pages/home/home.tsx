import React from 'react';
import Layout from '../../components/layout/layout';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { CityLocation } from '../../mocks/offers';
import Cities from '../../components/cities/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

const Home: React.FC = () => {
  const [selectedOfferId, setSelectedOfferId] = React.useState<number | null>(
    null
  );
  const dispatch = useAppDispatch();
  const curentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const onChangeCity = (city: string) => {
    dispatch(changeCity(city));
  };

  const currentOffers = offers.filter(
    (offer) => offer.city.name === curentCity
  );

  return (
    <Layout className="page--gray page--main" pageTitle="Home">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities currentCity={curentCity} onChangeCity={onChangeCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentOffers.length} places to stay in {curentCity}
              </b>
              <Sort />
              <ListOffers
                offers={currentOffers}
                onListItemHover={setSelectedOfferId}
                cardType="home"
                classNames="cities__places-list tabs__content"
              />
            </section>
            <div className="cities__right-section">
              <Map
                className="cities__map"
                city={CityLocation}
                offers={currentOffers}
                selectedOfferId={selectedOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Home;
