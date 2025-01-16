import { useState } from 'react'
import AboutSection from './_components/AboutSection'
import BuySection from './_components/BuySection'
import ChatModal from './_components/ChatModal'
import Header from './_components/Header'
import HeroSection from './_components/HeroSection'
import MovingLineSection from './_components/MovingLineSection'
import styles from './app.module.scss'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Header />

      <main>
        <HeroSection />
        <MovingLineSection bgColor='#a0da3c' />
        <AboutSection />
        <MovingLineSection bgColor='#919191' />
        <BuySection />
        {/* <ChatModal /> */}

        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 15000 }}>
          <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
          <ChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </main>

    </div>
  )
}

export default App
