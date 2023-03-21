import { RiDeleteBin6Line } from 'react-icons/ri'

export const Product = ({ img, description, price, qty, totalPrice }) => {
  return (
    <div className='bg-[#262837] p-2 rounded-xl mb-3'>
      <div className='grid grid-cols-6 mb-4'>
        {/* Product description */}
        <div className='col-span-4 flex items-center gap-3'>
          <img src={img} className='w-10 h-10 object-cover' />
          <div>
            <h5 className='text-sm'>{description}</h5>
            <p className='text-xs text-gray-500'>${price}</p>
          </div>
        </div>
        {/* Qty */}
        <div>
          <span>{qty}</span>
        </div>
        {/* Price */}
        <div>
          <span>${totalPrice}</span>
        </div>
      </div>

      {/* Note */}
      <div className='grid grid-cols-6 items-center'>
        <form className='col-span-5'>
          <input
            type='text'
            placeholder='Order note...'
            className='bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none'
          />
        </form>
        <div>
          <button className='border border-red-500 p-2 rounded-lg'>
            <RiDeleteBin6Line className='text-red-500' />
          </button>
        </div>
      </div>
    </div>
  )
}
