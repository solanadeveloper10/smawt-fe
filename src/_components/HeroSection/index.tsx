import { MotionButton } from '../Button'
import styles from './styles.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>$DUMB</h1>
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.heroBtn}>
          <a href="https://raydium.io/swap/?inputMint=sol&outputMint=bKegX6AzDjryfYhsLxhvXfUNz49rW5EDaRinmesmawt" target='_blank'>BUY</a>
        </MotionButton>
      </div>
    </section>
  )
}

export default HeroSection
