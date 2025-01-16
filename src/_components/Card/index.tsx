import { forwardRef } from 'react'
import { motion } from 'motion/react'

import styles from './styles.module.scss'

interface ICard extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

const Card: React.FC<ICard> = forwardRef((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div ref={ref} className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  )
})

export const MotionCard = motion(Card);

export default Card
