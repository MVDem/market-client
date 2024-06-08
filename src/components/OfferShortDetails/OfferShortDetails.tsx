import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { offersAPI } from '../../store/services/offers.service';
// import { OfferCard } from '../../types/Offers';
import styles from './offerShortDetails.module.scss';

type OfferShortDetailsProps = {
  offerId: string;
};

function OfferShortDetails({ offerId }: OfferShortDetailsProps) {
  const { data: offer, isLoading } = offersAPI.useGetOneByIdQuery({ offerId });

  return (
    <>
      {isLoading && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      {!isLoading && offer && (
        <div className={styles.wrapper}>
          <div className={styles.topContainer}>
            <p>/Shop/Category</p>
            <div className={styles.category}>Category</div>
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.image}>
              <img src={offer.image} alt="image" />
            </div>
            <div className={styles.info}>
              <div className={styles.mainInfo}>
                <h2>{offer.name}</h2>
                <p>Unit: {offer.unit}</p>
              </div>
              <div className={styles.description}>
                <h3>About:</h3>
                <article>{offer.description_EN}</article>
              </div>
              <div className={styles.purchases}>
                <div className="offer-short-details__price">₪{offer.price}</div>
                <button disabled>Buy now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default OfferShortDetails;

// const _offer: OfferCard = {
//   id: '4',
//   name: 'Strawberries',
//   unit: '100 g',
//   price: '50',
//   image: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055',
//   isActive: true,
//   description_EN:
//     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptatibus aliquid impedit facere beatae autem, sequi soluta nesciunt recusandae tempore quo, aliquam natus odio. Minus adipisci praesentium necessitatibus tempore cumque nam impedit optio porro saepe sunt autem, sapiente voluptate aut facilis ipsum animi sed consectetur. Quisquam vel ratione delectus earum culpa quam temporibus soluta expedita! Aliquid, unde doloribus deleniti officiis error nisi velit, soluta quidem distinctio dolore officia doloremque provident accusamus mollitia iure. Sit sapiente optio esse corporis architecto adipisci, dicta mollitia quasi voluptates dolores ad est quos consequatur praesentium dolore illo enim necessitatibus ea, ratione in? Inventore, ex hic?',
//   description_HE: 'תותי שדה',
//   farmerId: 67890,
// };
