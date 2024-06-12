import TableList from '../../../components/TableList/TableList';
import { useAppSelector } from '../../../store/hooks';
import { OfferCard } from '../../../types/Offers';
import styles from './profilePage.module.scss';
import { useNavigate } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { Switch, TableColumnsType } from 'antd';
import { offersAPI } from '../../../store/services/offers.service';

function ProfilePage() {
  const { user } = useAppSelector((state) => state.authReducer);
  const { data: offers } = offersAPI.useGetAllByFarmerQuery({
    farmerId: user?.farmer?.id!,
  });
  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();
  const [deleteOffer] = offersAPI.useDeleteMutation();

  const navigate = useNavigate();
  const farmer = user?.farmer;

  const handleNavigate = () => {
    navigate(`/farmer/profile/edit`, { state: { farmer: user?.farmer } });
  };

  const handleDeleteOffer = (id: number) => {
    deleteOffer({ offerId: id });
  };

  const handleActivate = (checked: boolean, offer: OfferCard) => {
    changeOffer({ ...offer, isActive: checked, price: offer.price.toString() });
  };

  const _columns: TableColumnsType<OfferCard> = [
    { title: 'Name', dataIndex: 'name_EN', key: 'name_EN' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Unit', dataIndex: 'unit', key: 'unit' },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (_, value: any) => (
        <Switch
          checked={value.isActive}
          onChange={(checked) => handleActivate(checked, value)}
          loading={isLoading}
          checkedChildren={'Active'}
          unCheckedChildren={'Inactive'}
        />
      ),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, value) => (
        <button onClick={() => handleDeleteOffer(+value.id)}>Delete</button>
      ),
    },
  ];

  return (
    <>
      {farmer && (
        <div className={styles.container}>
          <section className={styles.topContainer}>
            <div className={styles.cover}>
              <img src={farmer.coverURL} alt="avatar" />
            </div>
            <div className={styles.avatar}>
              <img src={farmer?.logoURL} alt="avatar" />
            </div>
          </section>
          <section className={styles.title}>
            <button className={styles.edit} onClick={handleNavigate}>
              <FiEdit2 />
            </button>
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
            {offers && <TableList columns={_columns} items={offers} />}
          </section>
        </div>
      )}
    </>
  );
}
export default ProfilePage;
