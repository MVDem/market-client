import { Category } from '../../types/Category';
import styles from './CategoryList.module.scss';
import CategoryListItem from './CategoryListItem';

export default function CategoryList() {
  // const {data: categoryList} = categoryApi.endpoints.getCategories.useQuery();

  const categoryList: Category[] = mockCategory;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {categoryList.map((category) => (
            <CategoryListItem item={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mockCategory = [
  {
    id: 1,
    name_EN: 'Poultry',
    imageURL:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/0df899-600x600.jpg?v=3',
  },
  {
    id: 2,
    name_EN: 'Cheese',
    imageURL:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/53c896-600x600.jpg?v=3',
  },
  {
    id: 3,
    name_EN: 'Sausage',
    imageURL:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/e65128-600x600.jpg?v=3',
  },
  {
    id: 4,
    name_EN: 'Vegetables',
    imageURL:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/a90442-600x600.jpg?v=3',
  },
  {
    id: 5,
    name_EN: 'Fish',
    imageURL:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/610a6a-600x600.jpg?v=3',
  },
  {
    id: 6,
    name_EN: 'Cookies',
    imageURL:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/category/51903d-600x600.jpg?v=3',
  },
];
