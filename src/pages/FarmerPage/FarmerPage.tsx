import styles from './farmerPage.module.scss';
import { useParams } from 'react-router-dom';
import { farmersAPI } from '../../store/services/farmers.service';
import OffersList from '../../components/OffersList/OffersList';

function FarmerPage() {
  const { id } = useParams<{ id: string }>();
  const { data: farmer } = farmersAPI.useGetFarmerByIdQuery(id!);

  return (
    <>
      {farmer && (
        <div className={styles.container}>
          <section className={styles.topContainer}>
            <div className={styles.cover}>
              <img src="/img/covers/1.jpg" alt="avatar" />
            </div>
            <div className={styles.avatar}>
              <img
                src={
                  farmer?.logoURL ? farmer?.logoURL : '/public/img/default.jpg'
                }
                alt="avatar"
              />
            </div>
          </section>
          <section className={styles.title}>
            <div className={styles.mainInfo}>
              <h1>{farmer.name}</h1>
            </div>
            <div className={styles.contacts}>
              <p>Phone: {farmer?.phone}</p>
              <p>Email: {farmer?.email}</p>
            </div>
          </section>
          <section className={styles.extra}>
            <h2>About</h2>
            <p>{farmer?.description}</p>
          </section>
          <span className={styles.line}></span>
          <section className={styles.offers}>
            <h2>Offers:</h2>
            {/* <OffersList offers={farmer.offers} /> */}
          </section>
        </div>
      )}
    </>
  );
}
export default FarmerPage;
