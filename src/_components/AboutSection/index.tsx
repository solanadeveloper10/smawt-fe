import { motion } from 'motion/react'

import styles from './styles.module.scss'

import Container from '../Container'

const AboutSection = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>About $SMAWT</h2>
            <p className={styles.description}>smawt Bob along with his crew of super memes, petrols the city of solana, looking for coins worthy of joining the justice meme legue of billion dollar super heros</p>
          </div>

          <div className={styles.imageContainer}>
            <motion.img src="src\assets\images\bob_glasses.png" alt="Smawt Bob in glasses"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: 10 }}
              className={styles.characterImg}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
