import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './categoryListItem.module.scss';
import { updateSearchParams } from '../../store/slices/search.slice';
import { Category } from '../../types/Category';
import useCloudinary from '../../hooks/cloudinary';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

interface CategoryItemProps {
  item: Category;
}

export default function CategoryListItem({ item }: CategoryItemProps) {
  const { search } = useAppSelector((state) => state.searchReducer);
  const cld = useCloudinary();
  const image = cld?.image(item.imageURL).resize(fill().width(160).height(160));

  const dispatch = useAppDispatch();

  const getAimation = () => {
    if (
      search.columnName === 'categoryId' &&
      search.value === item.id.toString()
    ) {
      return styles.containerActive;
    }
    return '';
  };

  const chooseCategory = (id: number) => {
    dispatch(
      updateSearchParams({
        search: { columnName: 'categoryId', value: id.toString() },
      }),
    );
  };

  return (
    <div
      className={[styles.container, getAimation()].join(' ')}
      onClick={() => chooseCategory(item.id)}
    >
      {image && <AdvancedImage cldImg={image} />}
      <div className={styles.title}>
        <h4>{item.name_EN}</h4>
      </div>
    </div>
  );
}
