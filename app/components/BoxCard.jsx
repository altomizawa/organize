'use client'

import Image from 'next/image'
import { formatDate } from '../lib/utils'
import { CldImage } from 'next-cloudinary/dist'

const BoxCard = ({ box }) => {
  const formattedDate = formatDate(box.created)

  return (
    <div className='border border-gray-800 p-4 rounded-lg'>
      <CldImage src={box.photos[0]} width={300} height={200} className='w-[300px] h-auto' alt={box.boxCode} />
      <h2 className='text-gray-600 font-bold mt-2'>Box: {box.boxCode}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Location: {box.location}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Date Added: {formattedDate}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Box Code: {box.boxCode}</h2>
      <h3 className='font-bold text-gray-600'>Room: </h3>
      <ul className='text-gray-600 font-bold mt-2 flex gap-2'>
        {box.category.map((category) => {
          return (
            <li className='font-bold text-xs bg-orange-300 w-max py-1 px-2 rounded-md -mt-2' key={category}>{category.toUpperCase()}</li>
          )
        })} 
      </ul>
      <h3 className='font-bold text-gray-600 mt-2'>Content: </h3>
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
