import { useState } from 'react'
import {
  RiAddLine,
  RiCloseLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiSearchLine,
  RiUser3Line
} from 'react-icons/ri'

import { Sidebar } from './components/shared/Sidebar'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />
      {/* Menu móvil */}
      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 px-8 py-2 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button className='p-2'>
          <RiAddLine />
        </button>
        <button className='p-2'>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className='text-white p-2'>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4'>
        <div className='lg:col-span-6'>
          {/* Header */}
          <header>
            {/* Title and search */}
            <div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
              <div>
                <h1 className='text-2xl text-gray-300'>Resto</h1>
                <p className='text-gray-500'>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
              <form>
                <div className='w-full relative'>
                  <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
                  <input
                    type='text'
                    placeholder='Search'
                    className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none'
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className='text-gray-300 flex items-center justify-between border-b mb-6 md:justify-start md:gap-8'>
              <a
                href='#'
                className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'
              >
                Hot dishes
              </a>
              <a href='#' className=' py-2 pr-4'>
                Cold dishes
              </a>
              <a href='#' className=' py-2 pr-4'>
                Soup
              </a>
              <a href='#' className=' py-2'>
                Grill
              </a>
            </nav>
          </header>
        </div>
        <div className='lg:col-span-2 fixed lg:static right-0'>Carrito</div>
      </main>
    </div>
  )
}

export default App
