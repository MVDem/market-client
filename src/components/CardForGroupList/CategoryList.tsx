import React from 'react';

import styles from './CategoryList.module.scss';
import CategoryListItem from '../CardForGroup/CategoryListItem';

const mockGroups = [
  {
    id: 1,
    name: 'Poultry',
    url: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/0df899-600x600.jpg?v=3',
  },
  {
    id: 2,
    name: 'Cheese',
    url: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/53c896-600x600.jpg?v=3',
  },
  {
    id: 3,
    name: 'Sausage',
    url: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/e65128-600x600.jpg?v=3',
  },
  {
    id: 4,
    name: 'Vegetables',
    url: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/a90442-600x600.jpg?v=3',
  },
  {
    id: 5,
    name: 'Fish',
    url: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/610a6a-600x600.jpg?v=3',
  },
  {
    id: 6,
    name: 'Cookies',
    url: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/51903d-600x600.jpg?v=3',
  },
];
export default function CategoryList() {
  return (
    <div className={styles.container}>
      {mockGroups.map((group) => (
        <CategoryListItem mock={group} />
      ))}
    </div>
  );
}
