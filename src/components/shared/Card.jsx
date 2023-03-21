export const Card = ({ img, description, price, inventory }) => {
  return (
    <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
      <img
        src={img}
        className='w-28 h-28 object-cover -mt-16  shadow-2xl rounded-full'
      />
      <p className='text-[18px]'>{description}</p>
      <span className='text-gray-400'>${price}</span>
      <p className='text-gray-600'>{inventory} Bowls available</p>
    </div>
  )
}
