import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.basePoint}>
      <div className={styles.all}>
        <div className={styles.handRight} />
        <div className={styles.handLeft} />
        <div className={styles.footRight} />
        <div className={styles.footLeft} />
        <div className={styles.circleBody}>
          <div className={styles.mouth} />
          <div className={styles.hidehandRight} />
          {/* <div className={styles.hidehandLeft} /> */}
          <div className={styles.hideMouth} />
          {/* <div className={styles.hideCircle} /> */}
          <div className={styles.cheekRight} />
          <div className={styles.cheekLeft} />
          <div className={styles.eyeRight}>
            <div className={styles.eyeBlue} />
            <div className={styles.eyeRed} />
            <div className={styles.eyeWhite} />
          </div>
          <div className={styles.eyeLeft}>
            <div className={styles.eyeBlue} />
            <div className={styles.eyeRed} />
            <div className={styles.eyeWhite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
