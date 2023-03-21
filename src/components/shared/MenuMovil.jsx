import {
  RiAddLine,
  RiCloseLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiUser3Line
} from 'react-icons/ri'

export const MenuMovil = ({ toggleOrder, toggleMenu, showMenu }) => {
  return (
    <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 px-8 py-2 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
      <button className='p-2'>
        <RiUser3Line />
      </button>
      <button className='p-2'>
        <RiAddLine />
      </button>
      <button onClick={toggleOrder} className='p-2'>
        <RiPieChartLine />
      </button>
      <button onClick={toggleMenu} className='text-white p-2'>
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </nav>
  )
}
