import React from 'react';
import cn from 'classnames';

import Card from '../card/card';
import { Offer } from '../../types/offer';

type ListOffersProps = {
  offers: Offer[];
  cardType: 'favorite' | 'home' | 'property';
  classNames: string;
  count?: number;
  onListItemHover?: (listItemName: number | null) => void;
};

const ListOffers: React.FC<ListOffersProps> = ({
  offers,
  onListItemHover,
  cardType,
  classNames,
  count = offers.length,
}) => (
  <div className={cn('places__list', classNames)}>
    {offers.slice(0, count).map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        cardType={cardType}
        onMouseEnter={() => onListItemHover?.(offer.id)}
        onMouseLeave={() => onListItemHover?.(null)}
      />
    ))}
  </div>
);

export default ListOffers;
