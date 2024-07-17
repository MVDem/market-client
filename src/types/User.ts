import { Offer } from './Offers';

export type Role = 'FARMER' | 'CUSTOMER' | 'ADMIN';

export type User = {
  id: number;
  email: string;
  password?: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
  farmer?: Farmer;
};

export type Farmer = {
  id: number;
  name: string | null;
  description: string | null;
  city: string | null;
  address: string | null;
  email: string;
  phone: string | null;
  coordinateLat: number | null;
  coordinateLong: number | null;
  userId: number;
  logoURL: string;
  coverURL: string;
  createdAt: string;
  updatedAt: string;
  offers?: Offer[];
};
