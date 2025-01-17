import { MotionButton } from '../Button'
import styles from './styles.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>$SMAWT</h1>
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.heroBtn}>BUY</MotionButton>
      </div>
    </section>
  )
}

export default HeroSection
