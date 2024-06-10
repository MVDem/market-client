import Baner from '../../components/Banner/Banner';
import CategoryList from '../../components/CardForGroupList/CategoryList';

import OffersList from '../../components/OffersList/OffersList';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Home - Farmer Market</h1>
        <CategoryList />
        <Baner />
        <OffersList />
      </div>
    </>
  );
}
