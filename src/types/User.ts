import { Offers } from './Offers';

export type Role = 'FARMER' | 'CUSTOMER' | 'ADMIN';

export type User = {
  id: number;
  login: string;
  password: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
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
  offers: Offers[];
};
