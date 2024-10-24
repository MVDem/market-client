import { fill } from '@cloudinary/url-gen/actions/resize';
import useCloudinary from '../../hooks/cloudinary';
import styles from './AvatarUI.module.scss';
import { RxAvatar } from 'react-icons/rx';
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';

interface AvatarProps {
  src: string;
  size?: number;
}

const AvatarUI = ({ src, size = 100 }: AvatarProps) => {
  const cld = useCloudinary();
  const image = cld?.image(src).resize(fill().width(size!).height(size!));

  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      {image && (
        <AdvancedImage
          cldImg={image}
          plugins={[
            lazyload(),
            responsive({ steps: 100 }),
            placeholder({ mode: 'blur' }),
          ]}
        />
      )}
      {!image && <RxAvatar className={styles.icon} />}
    </div>
  );
};
export default AvatarUI;
