import { Category } from '../../types/Category';
import styles from './CategoryList.module.scss';
import CategoryListItem from './CategoryListItem';

type CategoryListProps = {
  categoryList: Category[];
  chooseCategory: (id: number) => void;
  currentCategory: number | null;
};

export default function CategoryList({
  categoryList,
  chooseCategory,
  currentCategory,
}: CategoryListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {categoryList?.map((category, i) => (
            <CategoryListItem
              key={i}
              item={category}
              currentCategory={category.id === currentCategory}
              chooseCategory={chooseCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
