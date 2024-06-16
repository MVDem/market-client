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

// import Vegetables from '../../../public/img/categories/Vegetables-600x600.webp';
// import Fruits from '../../../public/img/categories/Vegetables-600x600.webp';
// import Meat from '../../../public/img/categories/Meat-600x600.jpg';
// import Cheese from '../../../public/img/categories/Cheese-600x600.webp';
// import Dairy from '../../../public/img/categories/Dairy-160x160.webp';
// import Bread from '../../../public/img/categories/Bread-600x600.jpg';
// import Fish from '../../../public/img/categories/Fish-600x600.webp';
// import Poultry from '../../../public/img/categories/Poultry-600x600.webp';

export type Params = {
  search: {
    columnName: string;
    value: string;
  };
  limit: number;
  page: number;
  sortBy: string;
  order: string;
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

  const isParamsByCategory = (
    params: Params | ParamsByCategory,
  ): params is ParamsByCategory => {
    return (params as ParamsByCategory).categoryId !== undefined;
  };

  const { data: paginatedData } = isParamsByCategory(params)
    ? offersAPI.useGetByCategoryIdQuery(params)
    : offersAPI.useGetPaginatedSortedOffersQuery(params);

  const offers = paginatedData?.offers || [];

  const chooseCategory = (id: number) => {
    setCurrentCategory(id);
    setParams((prev) => {
      return {
        ...prev,
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
