import { useEffect, useState } from 'react';
import TableList from '../../../components/TableList/TableList';
import { useAppSelector } from '../../../store/hooks';
import { OfferCard } from '../../../types/Offers';
import styles from './profilePage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { TableColumnsType } from 'antd';
import { farmersAPI } from '../../../store/services/farmers.service';

function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAppSelector((state) => state.authReducer);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  console.log('id', id);
  const { data: farmer } = farmersAPI.useGetFarmerByIdQuery(id!);

  useEffect(() => {
    if (user?.farmer?.id !== farmer?.id) {
      setEditMode(true);
    }
  }, [user, farmer]);

  const handleNavigate = () => {
    navigate(`/farmer/profile/edit`, { state: { farmer } });
  };

  const handleDeleteOffer = (id: number) => {
    console.log('handleDeleteOffer', id); // add RTL Query method
  };

  const _columns: TableColumnsType<OfferCard> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Unit', dataIndex: 'unit', key: 'unit' },
    { title: 'Active', dataIndex: 'isActive', key: 'isActive' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (r) => (
        <button onClick={() => handleDeleteOffer(r.id)}>Delete</button>
      ),
    },
  ];

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
            {editMode && (
              <button className={styles.edit} onClick={handleNavigate}>
                <FiEdit2 />
              </button>
            )}
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
            <TableList columns={_columns} items={farmer.offers} />
          </section>
        </div>
      )}
    </>
  );
}
export default ProfilePage;
