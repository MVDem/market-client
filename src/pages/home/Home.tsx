import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';

import OffersList from '../../components/OffersList/OffersList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { offersAPI } from '../../store/services/offers.service';
import styles from './Home.module.scss';
import Map from '../../components/Map/Map';
import { Category } from '../../types/Category';
import { categoriesAPI } from '../../store/services/categories.service';

export type Params = {
  search: {
    columnName: string;
    value: string;
  };
  limit: number;
  page: number;
  sortBy: string;
  order: string;
  categoryId?: number;
};

export type ParamsByCategory = Params & {
  categoryId: number;
};

export default function Home() {
  const { data: categories, refetch } = categoriesAPI.useGetCategoriesQuery({});

  const [params, setParams] = useState<Params | ParamsByCategory>({
    search: { columnName: '', value: '' },
    limit: 25,
    page: 1,
    sortBy: 'createdAt',
    order: 'ASC',
  });
  const [isMap, setIsMap] = useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>();
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);

  useEffect(() => {
    if (categories) {
      setCategoryList(categories.categories);
    }
  }, [categories]);

  const { data: paginatedData } =
    offersAPI.useGetPaginatedSortedOffersQuery(params);

  const offers = paginatedData?.offers || [];

  const chooseCategory = (id: number) => {
    setCurrentCategory(id);
    setParams((prev) => {
      return {
        ...prev,
        search: { columnName: '', value: '' },
        page: 1,
        categoryId: id,
      };
    });
  };

  return (
    <>
      <div className={styles.container}>
        <SearchBar
          setParams={setParams}
          setIsMap={setIsMap}
          refetch={refetch}
          params={params}
          setCurrentCategory={setCurrentCategory}
          
        />
        <CategoryList
          categoryList={categoryList!}
          chooseCategory={chooseCategory}
          currentCategory={currentCategory}
        />
        <Banner />
        {isMap ? (
          <Map offersList={offers} />
        ) : (
          <OffersList offersList={offers} />
        )}
      </div>
    </>
  );
}
