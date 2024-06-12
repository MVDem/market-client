import { Descriptions, DescriptionsProps } from 'antd';
import { OfferCard } from '../../types/Offers';
import { FiEdit2 } from 'react-icons/fi';
import styles from './tableList.module.scss';
import { useNavigate } from 'react-router-dom';

type TableOffersItemProps = {
  offer: OfferCard;
};

function TableListItem({ offer }: TableOffersItemProps) {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'English name',
      children: offer.name_EN,
    },
    {
      key: '2',
      label: 'Hebrew name',
      children: offer.name_HE,
    },
    {
      key: '3',
      label: 'Unit',
      children: offer.unit,
    },
    {
      key: '4',
      label: 'Price',
      children: offer.price,
    },
    {
      key: '5',
      label: 'English description',
      children: offer.description_EN,
    },
    {
      key: '6',
      label: 'Hebrew description',
      children: offer.description_HE,
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <br />
      <Descriptions
        title="Custom Size"
        extra={
          <button onClick={() => navigate('')} className={styles.edit}>
            <FiEdit2 />
          </button>
        }
        items={items}
      />
    </div>
  );
}
export default TableListItem;
