import { motion } from 'motion/react'

import styles from './styles.module.scss'

import Container from '../Container'

interface IAboutSection extends React.ComponentProps<"div"> {
  onOpenChatBtnClick: () => void
}

const AboutSection: React.FC<IAboutSection> = (props) => {
  const { onOpenChatBtnClick } = props

  return (
    <section className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>About $SMAWT</h2>
            <p className={styles.description}>I'm gonna be $SMAWT. My dweem have best awtificial intelligence than all agents, I alweady have awtificial, now I just need intelligence! Hellp me to become beter.</p>
          </div>

          <div className={styles.arrowContainer}>
            <div className={styles.arrowText}></div>
            <div className={styles.arrowImg}></div>
          </div>

          <div className={styles.imageContainer}>
            <motion.img src="assets/images/bob_glasses.png" alt="Smawt Bob in glasses"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: 10 }}
              className={styles.characterImg}
              onClick={onOpenChatBtnClick}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
