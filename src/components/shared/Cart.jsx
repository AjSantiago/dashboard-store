import { RiCloseLine } from 'react-icons/ri'
import { Product } from './Product'

export const Cart = ({ showOrder, setShowOrder }) => {
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? 'right-0' : '-right-full'
      }`}
    >
      {/* Orders */}
      <div className='relative pt-12 lg:pt-2 text-gray-300 p-3 h-full'>
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl'
        />
        <h1 className='text-2xl my-4'>Orders #121314</h1>

        {/* Pills */}
        <div className='flex items-center justify-between md:justify-around lg:justify-between flex-wrap mb-4'>
          <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>
            Dine In
          </button>
          <button className=' text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
            To Go
          </button>
          <button className=' text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
            Delivery
          </button>
        </div>

        {/* Cart */}
        <div>
          <div className='grid grid-cols-6 mb-2 p-2'>
            <h5 className='col-span-4'>Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>

          {/* Products */}
          <div className='h-[400px] md:h-[700px] lg:h-[340px] overflow-scroll'>
            {/* Product */}
            <Product
              img='../public/comida_01.png'
              description='Spaicy seaso...'
              price='2.29'
              qty='2'
              totalPrice='4.58'
            />
            <Product
              img='../public/comida_02.png'
              description='Spaicy seaso...'
              price='2.29'
              qty='2'
              totalPrice='4.58'
            />
            <Product
              img='../public/comida_01.png'
              description='Spaicy seaso...'
              price='2.29'
              qty='2'
              totalPrice='4.58'
            />
          </div>
        </div>

        {/* Submit payment */}
        <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-gray-400'>Discount</span>
            <span>$0</span>
          </div>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-gray-400'>Subtotal</span>
            <span>$500.00</span>
          </div>
          <div>
            <button className='bg-[#ec7c6a] w-full py-2 px-4 rounded-lg'>
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
