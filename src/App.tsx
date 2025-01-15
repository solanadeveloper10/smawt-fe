import Footer from './_components/Footer'
import Header from './_components/Header'
import HeroSection from './_components/HeroSection'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main>

        <HeroSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
