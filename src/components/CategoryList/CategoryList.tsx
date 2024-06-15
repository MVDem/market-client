import { Category } from '../../types/Category';
import styles from './CategoryList.module.scss';
import CategoryListItem from './CategoryListItem';

type CategoryListProps = {
  categoryList: Category[];
  chooseCategory: (id: number) => void;
};

export default function CategoryList({ categoryList, chooseCategory }: CategoryListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {categoryList.map((category, i) => (
            <CategoryListItem key={i} item={category} chooseCategory={chooseCategory}/>
          ))}
        </div>
      </div>
    </div>
  );
}
