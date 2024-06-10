import { Product } from './Products';
import { Farmer } from './User';

export type Offer = {
  id: string; //Fix API
  // offerId: string;
  unit: string;
  price: string;
  image: string;
  isActive: boolean;
  description_EN: string;
  description_HE: string;
  createdAt: string;
  updatedAt: string;
  farmer: Farmer;
  product: Product;
};

export type OfferCard = Omit<Offer, 'createdAt' | 'updatedAt'>;

export type CreateOffer = {
  productId: string;
  farmerId: number;
  name: string;
  unit: string;
  price: string;
  image?: string;
  isActive?: boolean;
  description_EN?: string;
  description_HE?: string;
};
