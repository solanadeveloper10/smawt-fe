import { forwardRef } from 'react'
import { motion } from 'motion/react'

import styles from './styles.module.scss'

interface IButton extends React.ComponentProps<"button"> {
  children: React.ReactNode
}

const Button: React.FC<IButton> = forwardRef((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <button ref={ref} className={`${styles.button} ${className}`} {...rest}>{children}</button>
  )
})

export const MotionButton = motion(Button);

export default Button
