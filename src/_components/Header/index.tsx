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
            <motion.a href="https://t.me/DumbBobPortal"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >Telegram</motion.a>
          </li>
          <li>
            <motion.a href="https://x.com/DumbBobfun"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >X (Twitter)</motion.a>
          </li>
          <li>
            <motion.a href="https://dexscreener.com/solana/dLComYLn2sTQZTTQHyWeL6cdkPLsYyzSYrQmWxUpump"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >Dexscreener</motion.a>
          </li>
          <li>
            <motion.a href="https://www.dextools.io/app/en/solana/pair-explorer/Dao1bmFUycyHmR3CEqC6ebCBxgncYm5mwLb5doWgGZzG?t=1747173123220"
              target='_blank'
              whileHover={{
                scale: 1.1,
                color: 'red',
              }}
            >Dextools</motion.a>
          </li>
          <li>
            <motion.a href="https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=dLComYLn2sTQZTTQHyWeL6cdkPLsYyzSYrQmWxUpump"
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
