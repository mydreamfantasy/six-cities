import React from 'react';

import Badge from '../badge/badge';
import { Offer } from '../../types/offer';
import ImagePlace from '../image-place/image-place';
import Bookmark from '../bookmark/bookmark';
import { getRatingColor } from '../../utils/utils';

type FavoriteCardProps = {
  offer: Offer;
};

const FavoriteCard: React.FC<FavoriteCardProps> = ({ offer }) => {
  const { price, previewImage, title, type, isPremium, rating } = offer;

  return (
    <article className="favorites__card place-card">
      {isPremium && <Badge />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <ImagePlace previewImage={previewImage} title={title} type="favorite" />
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark className="place-card__bookmark-button--active" />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingColor(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">
          {type.replace(type[0], type[0].toUpperCase())}
        </p>
      </div>
    </article>
  );
};

export default FavoriteCard;
