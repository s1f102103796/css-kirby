import { useState } from 'react';
import styles from './index.module.css';
import jumpStyles from './jump.module.css';
import walkStyles from './walk.module.css';

const Home = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [isWalking, setIsWalking] = useState(false);

  const JumpButtonClick = () => {
    setIsJumping(!isJumping);
    setIsWalking(false);
  };
  const WalkButtonClick = () => {
    setIsWalking(!isWalking);
    setIsJumping(false);
  };

  return (
    <div className={styles.basePoint}>
      <div className={styles.background} />
      <div
        className={
          isJumping && !isWalking
            ? `${styles.allMove} ${jumpStyles['allMove']}`
            : isWalking
            ? `${styles.allMove} ${walkStyles['allMove']}`
            : styles.allMove
        }
      >
        <div
          className={
            isJumping && !isWalking
              ? `${styles.handRight} ${jumpStyles['handRight']}`
              : isWalking
              ? `${styles.handRight} ${walkStyles['handRight']}`
              : styles.handRight
          }
        />
        <div
          className={
            isJumping && !isWalking
              ? `${styles.handLeft} ${jumpStyles['handLeft']}`
              : isWalking
              ? `${styles.handLeft} ${walkStyles['handLeft']}`
              : styles.handLeft
          }
        />

        <div
          className={
            isJumping && !isWalking
              ? `${styles.footRight} ${jumpStyles['footRight']}`
              : isWalking
              ? `${styles.footRight} ${walkStyles['footRight']}`
              : styles.footRight
          }
        />

        <div
          className={
            isJumping && !isWalking
              ? `${styles.footLeft} ${jumpStyles['footLeft']}`
              : isWalking
              ? `${styles.footLeft} ${walkStyles['footLeft']}`
              : styles.footLeft
          }
        />

        <div className={styles.circleBody}>
          <div className={styles.mouth} />
          <div
            className={
              isJumping && !isWalking
                ? `${styles.hidehandRight} ${jumpStyles['hidehandRight']}`
                : isWalking
                ? `${styles.hidehandRight} ${walkStyles['hidehandRight']}`
                : styles.hidehandRight
            }
          />
          <div
            className={
              isJumping && !isWalking
                ? `${styles.hidehandLeft} ${jumpStyles['hidehandLeft']}`
                : isWalking
                ? `${styles.hidehandLeft} ${walkStyles['hidehandLeft']}`
                : styles.hidehandLeft
            }
          />
          <div className={styles.hideMouth} />

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

      <button className={styles.jumpButton} onClick={JumpButtonClick}>
        Jump!
      </button>
      <button className={styles.walkButton} onClick={WalkButtonClick}>
        Walk!
      </button>
    </div>
  );
};

export default Home;
