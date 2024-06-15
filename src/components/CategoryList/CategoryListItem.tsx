import { Category } from '../../types/Category';
import styles from './CategoryListItem.module.scss';

interface CategoryItemProps {
  item: Category;
  chooseCategory: (id: number) => void;
}

export default function CategoryListItem({ item, chooseCategory }: CategoryItemProps) {

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${item.imageURL})` }}
      key={item.id}
      onClick={() => chooseCategory(item.id)}
    >
      <h4>{item.name_EN}</h4>
    </div>
  );
}
