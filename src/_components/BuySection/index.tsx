import { motion } from 'motion/react'

import styles from './styles.module.scss'

import { MotionCard } from '../Card'
import Container from '../Container'

const cardsContent = [
  {
    title: 'Get some SOL',
    iconSrc: 'assets/icons/solanaio.png',
    iconAlt: 'Solana logo',
    desc: 'Have SOL in your wallet to switch to $DUMB. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.',
  },
  {
    title: 'Connect to Pump Swap',
    iconSrc: 'assets/icons/raydium.png',
    iconAlt: 'Raydium logo',
    desc: 'Connect to Pump Swap. paste the contract address above into the search bar and find $DUMB token',
  },
  {
    title: 'Swap to $DUMB',
    iconSrc: 'assets/icons/logo.png',
    iconAlt: 'SMAWT logo',
    desc: 'Switch SOL for $DUMB. We have Zero taxes so you don’t need to worry about buying with a specific slippage.',
  }
]

const BuySection = () => {
  return (
    <section className={styles.wrapper}>
      <Container wide className={styles.container}>
        <h2 className={styles.title}>How to buy</h2>

        <div className={styles.cardsContainer}>
          {cardsContent.map((el, index) => (
            <MotionCard className={styles.card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.cardHeader}>
                <img className={styles.cardIcon} src={el.iconSrc} alt={el.iconAlt} />
                <h3 className={styles.cardTitle}>{index + 1}. {el.title}</h3>
              </div>
              <p className={styles.cardDescription}>{el.desc}</p>
            </MotionCard>

          ))}

        </div>

        <div className={styles.socialsContainer}>
          <motion.a href="https://www.dextools.io/app/en/solana/pair-explorer/dLComYLn2sTQZTTQHyWeL6cdkPLsYyzSYrQmWxUpump=1746984311637" target='_blank' className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="assets/icons/dextools.svg" alt="Dextools icon" />
          </motion.a>
          <motion.a href="https://dexscreener.com/solana/dLComYLn2sTQZTTQHyWeL6cdkPLsYyzSYrQmWxUpump" target='_blank' className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="assets/icons/dex_screener_tranparent_bg.png" alt="Dexscreener icon" />
          </motion.a>
        </div>

        <div className={styles.contractContainer}>
          <h3 className={styles.contractText}>
            Ca:&nbsp;dLComYLn2sTQZTTQHyWeL6cdkPLsYyzSYrQmWxUpump
          </h3>
        </div>
      </Container>
    </section >
  )
}

export default BuySection
