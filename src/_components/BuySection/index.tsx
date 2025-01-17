import { motion } from 'motion/react'

import styles from './styles.module.scss'

import { MotionCard } from '../Card'
import Container from '../Container'

const BuySection = () => {
  return (
    <section className={styles.wrapper}>
      <Container wide className={styles.container}>
        <h2 className={styles.title}>How to buy</h2>

        <div className={styles.cardsContainer}>
          <MotionCard className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Nigga</h3>
          </MotionCard>
          <MotionCard className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Nigga</h3>
          </MotionCard>
          <MotionCard className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>Nigga</h3>
          </MotionCard>
        </div>

        <div className={styles.socialsContainer}>
          <motion.a href="#" className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="assets/icons/dextools.svg" alt="Dextools icon" />
          </motion.a>
          <motion.a href="#" className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="assets/icons/dex_screener_tranparent_bg.png" alt="Dexscreener icon" />
          </motion.a>
        </div>

        <div className={styles.contractContainer}>
          <h3 className={styles.contractText}>
            Ca:&nbsp;aueBoWMMKpZFfnkvArmADmeuXFYxDHVfYnigXiHpump
          </h3>
        </div>
      </Container>
    </section >
  )
}

export default BuySection
