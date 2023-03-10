import React from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offer';

type ListOffersProps = {
  offers: Offer[];
  onListItemHover?: (listItemName: string) => void;
};

const ListOffers: React.FC<ListOffersProps> = ({ offers, onListItemHover }) => {
  const [, setIsShown] = React.useState<number | null>(null);
  // const listItemHoverHandler = (event: React.MouseEvent<HTMLLIElement>) => {
  //   event.preventDefault();
  //   onListItemHover(event.currentTarget.innerText);
  // };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          cardType="home"
          onMouseEnter={() => setIsShown(offer.id)}
          onMouseLeave={() => setIsShown(null)}
        />
      ))}
    </div>
  );
};

export default ListOffers;
