import { Product } from './Products';
import { Farmer } from './User';

export type Offer = {
  id: number;
  name_EN: string;
  name_HE: string;
  price: number;
  unit: string;
  imageURL: string;
  isActive: boolean;
  description_EN: string;
  description_HE: string;
  farmer: Farmer;
  product: Product;
};

export type CreateOffer = {
  name_EN: string;
  name_HE?: string;
  price: number;
  unit: string;
  imageURL?: string;
  isActive?: boolean;
  description_EN?: string;
  description_HE?: string;
  productId: number;
};

export type CreateOfferUpload = {
  dto: CreateOffer;
  file?: File;
};

export type UpdateOffer = {
  name_EN?: string;
  name_HE?: string;
  price?: number;
  unit?: string;
  imageURL?: string;
  isActive?: boolean;
  description_EN?: string;
  description_HE?: string;
  productId?: number;
};

export type UpdateOfferUpload = {
  dto?: UpdateOffer;
  file?: File;
};
