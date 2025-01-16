import styles from './styles.module.scss'

interface IContainer extends React.ComponentProps<"div"> {
  children: React.ReactNode
  wide?: boolean
}

const Container: React.FC<IContainer> = (props) => {
  const { children, className, wide = false, ...rest } = props

  return (
    <div className={(wide ? styles.containerWide : styles.container) + ' ' + className} {...rest}>
      {children}
    </div>
  )
}

export default Container
