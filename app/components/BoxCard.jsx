import Image from 'next/image'

const BoxCard = ({ box }) => {
const date = new Date(box.created);

// Extract the day, month, and year from the Date object
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
const year = date.getFullYear();

// Format the date as DD/MM/YYYY
const formattedDate = `${day}/${month}/${year}`;
  return (
    <div className='border border-gray-800 p-4 rounded-lg'>
      <Image src={box.photos[0]} width={300} height={500} alt={box.boxCode} />
      <h2 className='text-gray-600 font-bold mt-2'>Box: {box.boxCode}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Location: {box.location}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Date Added: {formattedDate}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Box Code: {box.boxCode}</h2>
      <h2 className='text-gray-600 font-bold mt-2'>Categories: {box.category.map(category => category)}</h2>
      <ul>
        {box.contents.map((content) => 
        (
          <li>{content}</li>
        ))}
      </ul>
    </div>
  )
}

export default BoxCard
