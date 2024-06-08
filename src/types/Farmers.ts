import { Offer } from './Offers';

export type Farmer = {
  userId: number;
  name: string;
  description: string;
  city: string;
  address: string;
  email: string;
  phone: string;
  coordinateLat: number;
  coordinateLong: number;
  offers: Offer[];
};
