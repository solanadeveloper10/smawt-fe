import { motion } from "motion/react";

import styles from "./styles.module.scss";

import Container from "../Container";

interface IAboutSection extends React.ComponentProps<"div"> {
  onOpenChatBtnClick: () => void;
}

const AboutSection: React.FC<IAboutSection> = (props) => {
  const { onOpenChatBtnClick } = props;

  return (
    <section className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>About $HODLER</h2>
            <p className={styles.description}>
              Bob is vewy smawt, he got AI whic helped him buy and hodle
              Bitcoin. Can you do the same with your intellect?
            </p>
          </div>

          <div className={styles.arrowContainer}>
            <div className={styles.arrowText}></div>
            <div className={styles.arrowImg}></div>
          </div>

          <div className={styles.imageContainer}>
            <motion.img
              src='assets/images/bob_glasses.png'
              alt='Smawt Bob in glasses'
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: 10 }}
              className={styles.characterImg}
              onClick={onOpenChatBtnClick}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
