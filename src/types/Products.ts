export type Product = {
  id: number;
  category: string;
  name_EN: string;
  name_HE: string;
  description_EN: string;
  description_HE: string;
  imageURL: string;
};

export type CreateProduct = {
  category: string;
  name_EN: string;
  name_HE: string;
  description_EN?: string;
  description_HE?: string;
  imageURL?: string;
};

export type UpdateProduct = {
  category?: string;
  name_EN?: string;
  name_HE?: string;
  description_EN?: string;
  description_HE?: string;
  imageURL?: string;
};
