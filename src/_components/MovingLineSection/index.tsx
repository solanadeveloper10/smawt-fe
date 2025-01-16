import { motion } from "motion/react"

import styles from './styles.module.scss'

const WORD = '$SMAWT'

interface IMovingLineSection {
  bgColor: string
}

const MovingLineSection: React.FC<IMovingLineSection> = (props) => {
  const {bgColor = '#5c5c5c'} = props

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.movingPart}
        style={{backgroundColor: bgColor}}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        <div>{
          Array.from({ length: 20 })
            .map((_, index) => (
              <span key={index}>{WORD}</span>
            )
            )
        }</div>
        <div>{
          Array.from({ length: 20 })
            .map((_, index) => (
              <span key={index}>{WORD}</span>
            )
            )
        }</div>
      </motion.div>
    </div>
  )
}

export default MovingLineSection
