import { Offer } from './Offers';

export type Role = 'FARMER' | 'CUSTOMER' | 'ADMIN';

export type User = {
  id: number;
  email: string;
  password: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
  farmer?: Farmer;
};

export type Farmer = {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
  email: string;
  phone: string;
  coordinateLat: number;
  coordinateLong: number;
  userId: number;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
  offers: Offer[];
};
