//===============================================

import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { Offer, OfferCard } from '../../types/Offers';

interface PaginatedOffers {
  offers: Offer[];
  count: number;
}

const mockOffers: OfferCard[] = [
  {
    id: '1',
    unit: '3 kg',
    price: '10',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    isActive: true,
    description_EN: 'Fresh apples',
    description_HE: 'תפוחים חדשים',
    farmerId: 12345,
  },
  {
    id: '2',
    unit: '1 kg',
    price: '15',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
    isActive: true,
    description_EN: 'Organic oranges',
    description_HE: 'תפוזים חדשים',
    farmerId: 67890,
  },
  {
    id: '3',
    unit: '3 kg',
    price: '15',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
    isActive: false,
    description_EN: 'Inactive',
    description_HE: 'Inactive HE',
    farmerId: 67890,
  },
  {
    id: '4',
    unit: '100 g',
    price: '50',
    image: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055',
    isActive: true,
    description_EN:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptatibus aliquid impedit facere beatae autem, sequi soluta nesciunt recusandae tempore quo, aliquam natus odio. Minus adipisci praesentium necessitatibus tempore cumque nam impedit optio porro saepe sunt autem, sapiente voluptate aut facilis ipsum animi sed consectetur. Quisquam vel ratione delectus earum culpa quam temporibus soluta expedita! Aliquid, unde doloribus deleniti officiis error nisi velit, soluta quidem distinctio dolore officia doloremque provident accusamus mollitia iure. Sit sapiente optio esse corporis architecto adipisci, dicta mollitia quasi voluptates dolores ad est quos consequatur praesentium dolore illo enim necessitatibus ea, ratione in? Inventore, ex hic?',
    description_HE: 'תותי שדה',
    farmerId: 67890,
  },
];

const mockOffersByFarmer = (farmerId: string): OfferCard[] => [
  {
    id: '2',
    productId: '2',
    unit: '1 kg',
    price: '15',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
    isActive: true,
    description_EN: 'Organic oranges',
    description_HE: 'תפוזים חדשים',
    farmerId: 67890,
  },
  {
    id: '3',
    productId: '2',
    unit: '3 kg',
    price: '15',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b',
    isActive: false,
    description_EN: 'Inactive',
    description_HE: 'Inactive HE',
    farmerId: 67890,
  },
  {
    id: '4',
    productId: '2',
    unit: '100 g',
    price: '50',
    image: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055',
    isActive: true,
    description_EN:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptatibus aliquid impedit facere beatae autem, sequi soluta nesciunt recusandae tempore quo, aliquam natus odio. Minus adipisci praesentium necessitatibus tempore cumque nam impedit optio porro saepe sunt autem, sapiente voluptate aut facilis ipsum animi sed consectetur. Quisquam vel ratione delectus earum culpa quam temporibus soluta expedita! Aliquid, unde doloribus deleniti officiis error nisi velit, soluta quidem distinctio dolore officia doloremque provident accusamus mollitia iure. Sit sapiente optio esse corporis architecto adipisci, dicta mollitia quasi voluptates dolores ad est quos consequatur praesentium dolore illo enim necessitatibus ea, ratione in? Inventore, ex hic?',
    description_HE: 'תותי שדה',
    farmerId: 67890,
  },
];

const mockOfferById = (offerId: string): OfferCard | undefined =>
  mockOffers.find((offer) => offer.id === offerId);

export const mockBaseQuery: BaseQueryFn<
  { url: string; params?: Record<string, any> },
  unknown,
  unknown
> = async ({ url, params }) => {
  if (url.startsWith('/offers')) {
    if (url === '/offers') {
      const { limit = 10, page = 1 } = params || {};
      const paginatedOffers = mockOffers.slice(
        (page - 1) * limit,
        page * limit
      );
      return { data: { offers: paginatedOffers, count: mockOffers.length } };
    } else if (url.startsWith('/offers/allByFarmer/')) {
      const farmerId = parseInt(url.split('/').pop() as string);
      return { data: mockOffersByFarmer(farmerId.toString()) };
    } else if (url.startsWith('/offers/one/')) {
      const offerId = parseInt(url.split('/').pop() as string);
      const offer = mockOfferById(offerId.toString());
      return offer
        ? { data: [offer] }
        : { error: { status: 404, statusText: 'Not Found' } };
    }
  }
  return { error: { status: 404, statusText: 'Not Found' } };
};
