import styles from './AvatarUI.module.scss';
import { RxAvatar } from 'react-icons/rx';

interface AvatarProps {
  src: string;
}

const AvatarUI = (props: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      {props.src ? (
        <img className={styles.icon} src={props.src} alt="avatar" />
      ) : (
        <RxAvatar className={styles.icon} />
      )}
    </div>
  );
};
export default AvatarUI;
