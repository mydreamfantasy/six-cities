import React from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offer';

type ListOffersProps = {
  offers: Offer[];
  setSelectedOfferId?: (listItemName: number | null) => void;
};

const ListOffers: React.FC<ListOffersProps> = ({
  offers,
  setSelectedOfferId,
}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        cardType="home"
        onMouseEnter={() => setSelectedOfferId?.(offer.id)}
        onMouseLeave={() => setSelectedOfferId?.(null)}
      />
    ))}
  </div>
);

export default ListOffers;
