import { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Card } from './components/shared/Card'
import { Cart } from './components/shared/Cart'
import { Header } from './components/shared/Header'
import { MenuMovil } from './components/shared/MenuMovil'
import { Sidebar } from './components/shared/Sidebar'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setShowOrder(false)
  }
  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />

      {/* Menu móvil */}
      <MenuMovil
        toggleOrder={toggleOrder}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
      />

      <main className='lg:pl-28 pb-10 lg:pr-96'>
        <div className='md:p-4 p-4'>
          {/* Header */}
          <Header />

          {/* Title content */}
          <div className='flex items-center justify-between mb-16'>
            <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] px-4 py-2 rounded-lg'>
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className='p-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Card */}
            <Card
              img='../public/comida_01.png'
              description='Speacy seasoned seafood nodles'
              price='2.29'
              inventory='20'
            />
            {/* Card */}
            <Card
              img='../public/comida_02.png'
              description='Speacy seasoned seafood nodles'
              price='2.29'
              inventory='20'
            />
            {/* Card */}
            <Card
              img='../public/comida_01.png'
              description='Speacy seasoned seafood nodles'
              price='2.29'
              inventory='20'
            />
            {/* Card */}
            <Card
              img='../public/comida_02.png'
              description='Speacy seasoned seafood nodles'
              price='2.29'
              inventory='20'
            />
            {/* Card */}
            <Card
              img='../public/comida_01.png'
              description='Speacy seasoned seafood nodles'
              price='2.29'
              inventory='20'
            />
            {/* Card */}
            <Card
              img='../public/comida_02.png'
              description='Speacy seasoned seafood nodles'
              price='2.29'
              inventory='20'
            />
          </div>
        </div>

        {/* Cart */}
        <Cart showOrder={showOrder} setShowOrder={setShowOrder} />
      </main>
    </div>
  )
}

export default App
