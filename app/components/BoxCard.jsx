import Image from 'next/image'
import { formatDate } from '../lib/utils'

const BoxCard = ({ box }) => {
  const formattedDate = formatDate(box.created)
  return (
    <div className='border border-gray-800 p-4 rounded-lg'>
      <Image src={box.photos[0]} width={300} height={500} alt={box.boxCode} />
      <h2 className='text-gray-600 font-bold mt-2'>Box: {box.boxCode}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Location: {box.location}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Date Added: {formattedDate}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Box Code: {box.boxCode}</h2>
      <h3 className='font-bold text-gray-600'>Categories: </h3>
      <ul className='text-gray-600 font-bold mt-2'>
        {box.category.map((category) => {
          return (
            <li className='font-normal text-sm ml-8' key={category}>{category}</li>
          )
        })} 
      </ul>
      <h3 className='font-bold text-gray-600'>Content: </h3>
      <ul>
        {box.contents.map((content) => 
        (
          <li className='font-normal text-sm ml-8' key={content}>{content}</li>
        ))}
      </ul>
    </div>
  )
}

export default BoxCard
