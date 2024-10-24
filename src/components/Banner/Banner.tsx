import styles from './Banner.module.scss';

export default function Baner() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Welcome to <br></br>Farmer's Market Hub!</h2>
        <p className={styles.subTitle}>
          We are dedicated to connecting farmers and buyers, bringing fresh, 
          high-quality produce directly to your table. Our platform allows 
          farmers to showcase their products and buyers to discover a wide 
          variety of farm-fresh goods. Join us in supporting local agriculture 
          and enjoying the best that our farmers have to offer. Explore our 
          marketplace and find your next favorite product straight from the farm!
          
        </p>
        {/* <button className={styles.btn}>View Menu</button> */}
      </div>
    </div>
  );
}
