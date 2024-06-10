import styles from './AvatarUI.module.scss';
import { RxAvatar } from 'react-icons/rx';

interface AvatarProps {
  src: string;
  size?: number;
}

const AvatarUI = (props: AvatarProps) => {
  return (
    <div
      className={styles.avatar}
      style={{ width: props.size, height: props.size }}
    >
      {props.src ? (
        <img
          className={styles.icon}
          src={props.src}
          alt="avatar"
          width={`${props.size}`}
          height={`${props.size}`}
        />
      ) : (
        <RxAvatar className={styles.icon} />
      )}
    </div>
  );
};
export default AvatarUI;
