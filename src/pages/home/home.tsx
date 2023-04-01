import React from 'react';
import Layout from '../../components/layout/layout';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import Cities from '../../components/cities/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortingOffers } from '../../utils/utils';
import MainEmpty from '../../components/main-empty/main-empty';
import { getOffers, getOffersStatus } from '../../store/offers/selectors';
import { fetchOffersAction } from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import FullpageError from '../fullpage-error/fullpage-error';
import { getCity, getSortType } from '../../store/app-slice/selectors';
import { changeCity } from '../../store/app-slice/app';
const Home: React.FC = () => {
  const [selectedOfferId, setSelectedOfferId] = React.useState<number | null>(
    null
  );

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const currentSortName = useAppSelector(getSortType);
  const status = useAppSelector(getOffersStatus);

  React.useEffect(() => {
    if (!offers.length) {
      dispatch(fetchOffersAction());
    }
  }, [dispatch, offers]);

  const onChangeCity = (city: string) => {
    dispatch(changeCity(city));
  };

  const currentOffers = offers.filter(
    (offer) => offer.city.name === currentCity
  );

  const sortingOffers = getSortingOffers(currentOffers, currentSortName);

  if (status.isLoading) {
    return <LoadingScreen type="big" />;
  }

  if (status.isError) {
    return <FullpageError />;
  }

  return (
    <Layout className="page--gray page--main" pageTitle="Home">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities currentCity={currentCity} onChangeCity={onChangeCity} />
        {currentOffers.length === 0 ? (
          <MainEmpty city={currentCity} />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {currentOffers.length} places to stay in {currentCity}
                </b>
                <Sort currentSortName={currentSortName} />
                <ListOffers
                  offers={sortingOffers}
                  onListItemHover={setSelectedOfferId}
                  cardType="home"
                  classNames="cities__places-list tabs__content"
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className="cities__map"
                  city={sortingOffers[0].city}
                  offers={sortingOffers}
                  selectedOfferId={selectedOfferId}
                  width="100%"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};
export default Home;
