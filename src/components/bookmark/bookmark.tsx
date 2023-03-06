import React from 'react';

const Bookmark: React.FC = () => (
  <button className="place-card__bookmark-button button" type="button">
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);

export default Bookmark;
