import TableList from '../../../components/TableList/TableList';
import { useAppSelector } from '../../../store/hooks';
import styles from './profilePage.module.scss';
import { FiEdit2 } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import BackdropForm from '../../../components/BackdropForm/BackdropForm';
import { farmersAPI } from '../../../store/services/farmers.service';
import { DataFormType } from '../../../UI/FormUICustom/FormUICustom';
import { Button, Dropdown, Space } from 'antd';

function ProfilePage() {
  const [open, setOpen] = useState(false);
  const [farmerData, setFarmerData] = useState<DataFormType | null>(null);
  const { user } = useAppSelector((state) => state.authReducer);
  const [operation, setOperation] = useState<
    'editInfo' | 'changeCover' | 'changeLogo'
  >();
  const { data: farmer, refetch } = farmersAPI.useGetFarmerByIdQuery(
    user?.farmer?.id!.toString()!,
  );
  const [editFarmer, { isLoading: isLoadingEditFarmer }] =
    farmersAPI.useUpdateFarmerMutation();

  useEffect(() => {
    if (farmer) {
      setFarmerData({
        name: farmer.name,
        phone: farmer.phone,
        email: farmer.email,
        description: farmer.description,
        city: farmer.city,
        address: farmer.address,
      });
    }
  }, [farmer]);

  const handleSubmit = async (data: DataFormType) => {
    const formData = new FormData();
    if (operation === 'editInfo') {
      for (let key in data) {
        formData.append(key, String(data[key]));
      }
      await editFarmer({
        body: formData,
        id: farmer?.id!,
      });
    } else {
      formData.append('file', data.imageURL.file.originFileObj);
      if (operation === 'changeCover') {
      }
      if (operation === 'changeLogo') {
      }
    }

    setOpen(false);
    refetch();
  };

  const inputsFarmer = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter a name',
      defaultValue: farmerData?.name,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      placeholder: 'Enter phone',
      defaultValue: farmerData?.phone,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter email',
      defaultValue: farmerData?.email,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      placeholder: 'Enter a description',
      defaultValue: farmerData?.description,
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      placeholder: 'Enter a city',
      defaultValue: farmerData?.city,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Enter an address',
      defaultValue: farmerData?.address,
    },
  ];

  const items = [
    {
      key: '1',
      icon: (
        <Button
          onClick={() => {
            setOperation('editInfo');
            setOpen(true);
          }}
        >
          Edit info
        </Button>
      ),
    },
    {
      key: '2',
      icon: (
        <Button
          onClick={() => {
            setOperation('changeCover');
            setOpen(true);
          }}
        >
          Change cover
        </Button>
      ),
    },
    {
      key: '3',
      icon: (
        <Button
          onClick={() => {
            setOperation('changeLogo');
            setOpen(true);
          }}
        >
          Change logo
        </Button>
      ),
    },
  ];
  const getInputsForCurrentOperation = () => {
    switch (operation) {
      case 'editInfo':
        return inputsFarmer;
      case 'changeCover':
      case 'changeLogo':
        return [
          {
            name: 'imageURL',
            label: 'Image',
            type: 'upload',
            placeholder: 'Select an image',
            required: true,
          },
        ];
      default:
        return [];
    }
  };

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
            <div className={styles.edit}>
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <FiEdit2 size={20} />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className={styles.mainInfo}>
              <h1>{farmer.name}</h1>
            </div>
            <div className={styles.contacts}>
              <p>Phone: {farmer?.phone}</p>
              <p>Email: {farmer?.email}</p>
            </div>
          </section>
          <section className={styles.extra}>
            <p>
              Adress: {farmer?.city}, {farmer?.address}
            </p>
            <h2>About</h2>
            <p>{farmer?.description}</p>
          </section>
          <span className={styles.line}></span>
          <BackdropForm
            open={open}
            setOpen={setOpen}
            onSubmit={handleSubmit}
            inputs={getInputsForCurrentOperation()}
            isLoading={isLoadingEditFarmer}
          />
          <section className={styles.offers}>
            {farmer && <TableList farmerId={farmer?.id} />}
            {/* {farmer?.offers && <TableList farmerId={farmer?.id} />} */}
          </section>
        </div>
      )}
    </>
  );
}
export default ProfilePage;
