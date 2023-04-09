import React from 'react';
import cn from 'classnames';

import Card from '../card/card';
import { Offer } from '../../types/offer';

type ListOffersProps = {
  offers: Offer[];
  cardType: 'favorite' | 'home' | 'property';
  classNames: string;
  onListItemHover?: (listItemName: number | null) => void;
};

const ListOffers: React.FC<ListOffersProps> = ({
  offers,
  onListItemHover,
  cardType,
  classNames,
}) => {
  const handleMouseEnter = React.useCallback(
    (id: number) => onListItemHover?.(id),
    []
  );

  const handleMouseLeave = React.useCallback(() => onListItemHover?.(null), []);

  return (
    <div className={cn('places__list', classNames)}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default ListOffers;
