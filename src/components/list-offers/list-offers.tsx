import React from 'react';
import Card from '../card/card';
import { Offers } from '../types/offers';

type ListOffersProps = {
  offers: Offers[];
};

const ListOffers: React.FC<ListOffersProps> = ({ offers }) => {
  const [, setIsShown] = React.useState<number | null>(null);
  return (
    <>
      {offers.map((obj) => (
        <Card
          key={obj.id}
          title={obj.title}
          previewImage={obj.previewImage}
          type={obj.type}
          price={obj.price}
          isPremium={obj.isPremium}
          onMouseEnter={() => setIsShown(obj.id)}
          onMouseLeave={() => setIsShown(null)}
        />
      ))}
    </>
  );
};

export default ListOffers;
