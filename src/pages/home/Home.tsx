import Baner from '../../components/Banner/Banner';

import OffersList from '../../components/OffersList/OffersList';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Home - Farmer Market</h1>
        <Baner />
        <OffersList />
      </div>
    </>
  );
}
