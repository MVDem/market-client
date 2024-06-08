import styles from './editProfilePage.module.scss';
import FormUICustom from '../../../UI/FormUICustom/FormUICustom';
import {
  cityInput,
  descriptionInput,
  emailInput,
  firstNameInput,
  phoneInput,
} from '../../../utils/formUICustomFields';
import InputImage from '../../../UI/FormUICustom/InputImage/InputImage';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditProfilePage() {
  const [logo, setLogo] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const farmer = useLocation().state.farmer;
  console.log('state', farmer); //add farmer data to form

  const handleSubmit = (data: any) => {
    console.log('handleSubmit', data, logo, cover); //add logo and cover. sent data to server
  };

  return (
    <div className={styles.container}>
      <h1>Edit Profile :</h1>
      <span className={styles.line}></span>
      <div className={styles.wrapper}>
        <InputImage onChange={setLogo} label="Cover image" />
        <InputImage onChange={setCover} label="Logo image" />
        <FormUICustom
          buttonLabel="Edit"
          inputs={_inputs}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
export default EditProfilePage;

const _inputs = [
  phoneInput,
  emailInput,
  descriptionInput,
  cityInput,
  firstNameInput,
];
