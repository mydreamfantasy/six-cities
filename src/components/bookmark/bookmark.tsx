import React from 'react';
import cn from 'classnames';

type BookmarkProps = {
  className: string;
};

const Bookmark: React.FC<BookmarkProps> = ({ className }) => (
  <button
    className={cn('place-card__bookmark-button button', className)}
    type="button"
  >
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);

export default Bookmark;
