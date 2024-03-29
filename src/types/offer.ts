import { User } from './user';
import { Location } from './location';

export type City = {
  location: Location;
  name: string;
};

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  isFavorite: boolean;
};

export type FavoritePayload = {
  id: number;
  status: number;
};
