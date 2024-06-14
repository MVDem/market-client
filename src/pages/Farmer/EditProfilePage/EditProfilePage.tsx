import styles from './editProfilePage.module.scss';
import FormUICustom from '../../../UI/FormUICustom/FormUICustom';
import {
  cityInput,
  descriptionInput,
  emailInput,
  firstNameInput,
  phoneInput,
} from '../../../utils/formUICustomFields';
// import InputImage from '../../../UI/FormUICustom/InputImage/InputImage';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UploadFile } from 'antd';

function EditProfilePage() {
  const [fileList, setFileList] = useState<{
    [x: string]: UploadFile;
  }>();
  const farmer = useLocation().state?.farmer;
  console.log('state', farmer); //add farmer data to form

  const handleSubmit = (data: any) => {
    console.log('handleSubmit', data, fileList); //add logo and cover. sent data to server
  };

  return (
    <div className={styles.container}>
      <h1>Edit Profile :</h1>
      <span className={styles.line}></span>
      <div className={styles.wrapper}>
        {/* <InputImage onChange={setFileList} label="coverURL" />
        <InputImage onChange={setFileList} label="logoURL" /> */}
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
