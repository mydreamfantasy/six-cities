import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

type ImagePlaceProps = {
  previewImage: string;
  title: string;
  type: 'favorite' | 'home';
};

const sizes = {
  favorite: {
    width: 150,
    height: 110,
  },
  home: {
    width: 260,
    height: 200,
  },
};

const ImagePlace: React.FC<ImagePlaceProps> = ({
  previewImage,
  title,
  type,
}) => {
  const size = sizes[type];
  return (
    <Link to={AppRoute.Property}>
      <img
        className="place-card__image"
        src={previewImage}
        width={size.width}
        height={size.height}
        alt={title}
      />
    </Link>
  );
};

export default ImagePlace;
