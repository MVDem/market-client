import { Category } from '../../types/Category';
import styles from './CategoryListItem.module.scss';

interface Props {
  item: Category;
}

export default function CategoryListItem({ item }: Props) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${item.imageURL})` }}
      key={item.id}
    >
      <h4>{item.name_EN}</h4>
    </div>
  );
}
