import React from 'react';
import styles from './CategoryListItem.module.scss';

type Tgroup = {
  id: string;
  name: string;
  url: string;
};

interface Props {
  mock: Tgroup;
}

export default function CategoryListItem({ mock }: Props) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${mock.url})` }}
      key={mock.id}
    >
      <div className={styles.wrapper}>
        <h4>{mock.name}</h4>
      </div>
    </div>
  );
}
