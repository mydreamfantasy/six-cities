import React from 'react';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/comments/selectors';
import ReviewItem from '../review/review';

const ReviewList: React.FC = () => {
  const comments = useAppSelector(getComments);
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewItem
          key={`${comment.user.name} ${comment.id}`}
          review={comment}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
