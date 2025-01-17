import { useState } from "react";
import { motion } from "motion/react"

import styles from './styles.module.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <motion.a href="/"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src="assets/images/logo.png" alt="Smawt logo" className={styles.logo} />
        </motion.a>
        <ul className={isMenuOpen ? `${styles.navLinks} ${styles.open}` : styles.navLinks}>
          <li>
            <motion.a href="https://t.me/SmawtBob"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >Telegram</motion.a>
          </li>
          <li>
            <motion.a href="https://x.com/SmawtBob"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >X (Twitter)</motion.a>
          </li>
          <li>
            <motion.a href="https://dexscreener.com/solana/bKegX6AzDjryfYhsLxhvXfUNz49rW5EDaRinmesmawt"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >Screener</motion.a>
          </li>
          <li>
            <motion.a href="https://www.dextools.io/app/en/solana/pair-explorer/8xqGFEFGqE9F2CLoCXDoLnooKaPGsoxsymHx9YtCrg3W?t=1737118396945"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >Dextools</motion.a>
          </li>
          <li>
            <motion.a href="https://raydium.io/swap/?inputMint=sol&outputMint=bKegX6AzDjryfYhsLxhvXfUNz49rW5EDaRinmesmawt"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >Buy</motion.a>
          </li>
        </ul>
        <div
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </nav>
    </header>
  )
}

export default Header
