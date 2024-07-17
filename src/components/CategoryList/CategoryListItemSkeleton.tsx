import { Skeleton } from 'antd';
import styles from './catedoryListItemSkeleton.module.scss';
import { CircularProgress } from '@mui/material';

type CatedoryListItemSkeletonProps = {
  count: number;
};

function CatedoryListItemSkeleton({ count }: CatedoryListItemSkeletonProps) {
  return Array(count)
    .fill(0)
    .map((_, index) => (
      <Skeleton.Node key={index} active className={styles.skeleton}>
        <CircularProgress color="inherit" size={32} />
      </Skeleton.Node>
    ));
}
export default CatedoryListItemSkeleton;
