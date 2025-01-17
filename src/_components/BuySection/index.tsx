import { motion } from 'motion/react'

import styles from './styles.module.scss'

import { MotionCard } from '../Card'
import Container from '../Container'

const cardsContent = [
  {
    title: 'Get some SOL',
    iconSrc: 'assets/icons/solanaio.png',
    iconAlt: 'Solana logo',
    desc: 'Have SOL in your wallet to switch to $SMAWT. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.',
  },
  {
    title: 'Connect to Raydium',
    iconSrc: 'assets/icons/raydium.png',
    iconAlt: 'Raydium logo',
    desc: 'Connect to Raydium. paste the contract address above into the search bar and find $SMAWT token',
  },
  {
    title: 'Swap to $SMAWT',
    iconSrc: 'assets/icons/logo.png',
    iconAlt: 'SMAWT logo',
    desc: 'Switch SOL for $SMAWT. We have Zero taxes so you don’t need to worry about buying with a specific slippage.',
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
          <motion.a href="https://www.dextools.io/app/en/solana/pair-explorer/8xqGFEFGqE9F2CLoCXDoLnooKaPGsoxsymHx9YtCrg3W?t=1737118396945" target='_blank' className={styles.socialLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="assets/icons/dextools.svg" alt="Dextools icon" />
          </motion.a>
          <motion.a href="https://dexscreener.com/solana/bKegX6AzDjryfYhsLxhvXfUNz49rW5EDaRinmesmawt" target='_blank' className={styles.socialLink}
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
