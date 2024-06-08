import { GoPaperclip } from 'react-icons/go';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';

type InputImageProps = {
  label: string;
  onChange: (file: File | null) => void;
};

function InputImage({ label, onChange }: InputImageProps) {
  const [file, setFile] = useState<File | null>();

  useEffect(() => {
    onChange(file!);
  }, [file]);

  return (
    <div className={styles.inputImage}>
      <label className={styles.inputImage__label}>{label}</label>
      <div className={styles.inputImage__container}>
        {file && (
          <div className={styles.inputImage__fileName}>
            <p>{file.name}</p>
          </div>
        )}
        <div className={styles.inputImage__wrapper}>
          <input
            id="imageFile"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <div>
            <GoPaperclip className={styles.inputImage__icon} />
            {file ? 'Replace' : 'Upload file'}
          </div>
        </div>
      </div>
    </div>
  );
}
export default InputImage;
