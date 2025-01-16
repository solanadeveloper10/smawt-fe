import { MotionButton } from '../Button'
import styles from './styles.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>$SMAWT</h1>
      <MotionButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.heroBtn}>BUY $SMAWT</MotionButton>
    </section>
  )
}

export default HeroSection
