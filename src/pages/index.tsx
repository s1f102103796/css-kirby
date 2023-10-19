import { useState } from 'react';
import styles from './index.module.css';
import jumpStyles from './jump.module.css';

const Home = () => {
  const [isJumping, setIsJumping] = useState(false);

  const handleButtonClick = () => {
    setIsJumping(!isJumping);
  };

  return (
    <div className={styles.basePoint}>
      <div className={styles.background} />
      <div className={isJumping ? `${styles.allMove} ${jumpStyles['allMove']}` : styles.allMove}>
        {/* <div className={styles.allMove}> */}
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

      <button className={styles.jumpButton} onClick={handleButtonClick}>
        Jump!
      </button>
    </div>
  );
};

export default Home;
