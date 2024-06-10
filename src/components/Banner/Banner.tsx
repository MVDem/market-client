import styles from './Banner.module.scss';

export default function Baner() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Order your favorite food here</h2>
        <p className={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          suscipit voluptas excepturi ea illo earum necessitatibus, libero
          consequatur. Asperiores nam modi adipisci explicabo fugit vero sequi
          libero? Iusto, minus est.
        </p>
        {/* <button className={styles.btn}>View Menu</button> */}
      </div>
    </div>
  );
}
