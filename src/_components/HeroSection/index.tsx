import Button from '../Button'
import styles from './styles.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>$SMAWT</h1>
      <Button className={styles.heroBtn}>BUY $SMAWT</Button>
    </section>
  )
}

export default HeroSection
