export type Product = {
  id: string;
  category: string;
  name_EN: string;
  name_HE: string;
  description_EN: string;
  description_HE: string;
  photo: string;
};

export type CreateProduct = {
  category: string;
  name_EN: string;
  name_HE: string;
  description_EN: string;
  description_HE: string;
  photo: string;
};

export type UpdateProduct = {
  category: string;
  name_EN: string;
  name_HE: string;
  description_EN: string;
  description_HE: string;
  photo: string;
};
