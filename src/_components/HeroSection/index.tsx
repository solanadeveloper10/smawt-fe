import { MotionButton } from "../Button";
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>$HODLER</h1>
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.heroBtn}
        >
          <a
            href='https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=dLComYLn2sTQZTTQHyWeL6cdkPLsYyzSYrQmWxUpump'
            target='_blank'
          >
            BUY
          </a>
        </MotionButton>
      </div>
    </section>
  );
};

export default HeroSection;
