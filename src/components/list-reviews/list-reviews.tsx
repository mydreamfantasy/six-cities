import React from 'react';
import { reviews } from '../../mocks/reviews';
import ReviewItem from '../review/review';

const ListReviews: React.FC = () => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem key={review.id} review={review} />
    ))}
  </ul>
);

export default ListReviews;
