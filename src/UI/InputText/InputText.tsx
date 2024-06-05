import { useState } from 'react';
import styles from './style.module.scss';
import { Farmer } from '../../types/User';

export default function InputText(props: {
  setIsInputText: (arg0: boolean) => void;
  setatrInputText: (arg0: keyof Farmer | '') => void;
  atrInputText: keyof Farmer | '';
  inputValue: Farmer[keyof Omit<Farmer, 'offers'>];
}) {
  const [atrValue, setAtrValue] = useState(props.inputValue);

  const hadleCloseWindow = () => {
    props.setIsInputText(false);
    props.setatrInputText('');
  };

  const handleSentChanges = () => {
    props.setIsInputText(false);
    props.setatrInputText('');
    setAtrValue('');
  };

  return (
    <div className={styles.inputText}>
      <div>
        <button onClick={() => hadleCloseWindow()}>
          <img src="/img/close.svg" alt="close" />
        </button>
      </div>
      <input
        placeholder="write the "
        required={true}
        value={atrValue ?? ''}
        onChange={(e) => setAtrValue(e.target.value)}
      />
      <button onClick={handleSentChanges}>
        Send change {props.atrInputText}
      </button>
    </div>
  );
}
