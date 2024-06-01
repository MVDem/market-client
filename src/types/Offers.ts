export type Offer = {
  id: string;
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
