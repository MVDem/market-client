import { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Farmer, User } from '../../../types/User';
import styles from './profilePage.module.scss';
import InputText from '../../../UI/InputText/InputText';
import { CiEdit } from 'react-icons/ci';

function ProfilePage() {
  const { user } = useAppSelector((state) => state.authReducer);

  const [isInputText, setIsInputText] = useState(false);
  const [atrInputText, setatrInputText] = useState<keyof Farmer | ''>('');
  const [inputValue, setInputValue] =
    useState<Farmer[keyof Omit<Farmer, 'offers'>]>('');

  const handleChange = (atr: keyof Omit<Farmer, 'offers'>) => {
    if (_user.farmer) {
      setIsInputText(true);
      setatrInputText(atr);
      setInputValue(_user.farmer[atr]);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.topContainer}>
          <div className={styles.cover}>
            <img src="/img/1.jpg" alt="avatar" />
          </div>
          <div className={styles.avatar}>
            <img
              src={
                _user.farmer?.imageURL
                  ? _user.farmer?.imageURL
                  : '/public/img/default.jpg'
              }
              alt="avatar"
            />
          </div>
        </section>
        <section className={styles.title}>
          <div className={styles.mainInfo}>
            <h1>{_user.farmer?.name}</h1>
          </div>
          <div className={styles.contacts}>
            <p>Phone: {_user.farmer?.phone}</p>
            <p>Email: {_user.farmer?.email}</p>
          </div>
        </section>
        <span className={styles.line}></span>
        <section>
          <div className={styles.info}>
            {/* <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleChange('name')}
                    >
                      {_user.farmer?.name}
                      <CiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>City:</td>
                  <button
                    className={styles.editBtn}
                    onClick={() => handleChange('city')}
                  >
                    {_user.farmer?.city}
                    <CiEdit />
                  </button>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleChange('address')}
                    >
                      {_user.farmer?.address}
                      <CiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleChange('email')}
                    >
                      {_user.farmer?.email}
                      <CiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleChange('phone')}
                    >
                      {_user.farmer?.phone}
                      <CiEdit />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </section>
        <section className={styles.subInfo}>
          <p>{_user.farmer?.description}</p>
        </section>
        <div
          className={styles.profile__formAvatar}
          style={{
            display: isInputText ? 'flex' : 'none',
          }}
        >
          <InputText
            setIsInputText={setIsInputText}
            setatrInputText={setatrInputText}
            atrInputText={atrInputText}
            inputValue={inputValue}
          />
        </div>
      </div>
    </>
  );
}
export default ProfilePage;

const _user: User = {
  id: 5,
  email: 'farmer@gmail.com',
  role: 'FARMER',
  createdAt: '2024-06-05T10:34:44.151Z',
  updatedAt: '2024-06-05T10:34:44.151Z',
  farmer: {
    id: 4,
    name: "Bob's Farm",
    description:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
    city: 'New York',
    address: '1234 Main St',
    email: 'farmer@gmail.com',
    phone: '123-456-7890',
    coordinateLat: null,
    coordinateLong: null,
    userId: 5,
    imageURL: '/img/logo2.png',
    createdAt: '2024-06-05T10:34:44.158Z',
    updatedAt: '2024-06-05T10:34:44.158Z',
  },
};
