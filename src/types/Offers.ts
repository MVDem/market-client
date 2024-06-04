export type Offer = {
  id: string;
  productId?: string;
  name: string;
  unit: string;
  price: string;
  image: string;
  isActive: boolean;
  description_EN: string;
  description_HE: string;
  farmerId: number;
  createdAt: string;
  updatedAt: string;
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
