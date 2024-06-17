// src/components/CategoryListItem.tsx
import { Category } from '../../types/Category';
import styles from './CategoryListItem.module.scss';

interface CategoryItemProps {
  item: Category;
  chooseCategory: (id: number) => void;
  currentCategory: boolean;
}

export default function CategoryListItem({
  item,
  chooseCategory,
  currentCategory,
}: CategoryItemProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${item.imageURL})`,
        border: `5px solid ${currentCategory ? '#05c454' : '#fff'}`,
      }}
      onClick={() => chooseCategory(item.id)}
    >
      <h4>{item.name_EN}</h4>
    </div>
  );
}
