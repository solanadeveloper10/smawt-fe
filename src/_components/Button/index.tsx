import styles from './styles.module.scss'

interface IButton extends React.ComponentProps<"button"> {
  children: React.ReactNode
}

const Button: React.FC<IButton> = (props) => {
  const { children, className, ...rest } = props

  return (
    <button className={`${styles.button} ${className}`} {...rest}>{children}</button>
  )
}

export default Button
