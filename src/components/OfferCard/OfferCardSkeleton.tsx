import { Skeleton } from 'antd';
import styles from './offerCardSkeleton.module.scss';
import { CircularProgress } from '@mui/material';

type OfferCardSkeletonProps = {
  count: number;
};

function OfferCardSkeleton({ count }: OfferCardSkeletonProps) {
  return Array(count)
    .fill(0)
    .map((_, index) => (
      <div key={index} className={styles.cardSkeleton}>
        <Skeleton.Node key={index} active className={styles.image}>
          <CircularProgress color="inherit" />
        </Skeleton.Node>
        <div className={styles.details}>
          <Skeleton.Button active size={'large'} />
          <Skeleton.Button active size={'small'} />
          <Skeleton.Button active size={'small'} />
        </div>
        <div className={styles.farmer}>
          <Skeleton.Avatar active size={50} />
          <Skeleton.Button active size={'small'} />
        </div>
      </div>
    ));
}
export default OfferCardSkeleton;
