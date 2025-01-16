import { motion } from "motion/react"

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <motion.a href="/"
          whileHover={{
            scale: 1.1,
          }}
        >Logo</motion.a>
        <motion.a href="/"
          whileHover={{
            scale: 1.1,
            color: 'red',
          }}
        >Telegram</motion.a>
        <motion.a href="/"
          whileHover={{
            scale: 1.1,
            color: 'red',
          }}
        >Twitter</motion.a>
        <motion.a href="/"
          whileHover={{
            scale: 1.1,
            color: 'red',
          }}
        >Screener</motion.a>
        <motion.a href="/"
          whileHover={{
            scale: 1.1,
            color: 'red',
          }}
        >Dextools</motion.a>
        <motion.a href="/"
          whileHover={{
            scale: 1.1,
            color: 'red',
          }}
        >Buy</motion.a>
      </nav>
    </header>
  )
}

export default Header
