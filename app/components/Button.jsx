import Link from 'next/link'

const Button = () => {
  return (
    <Link href='/myboxes/new' className='border border-gray-800 p-4 rounded-lg w-[300px] min-h-[400px] flex justify-center items-center text-8xl duration-300 hover:bg-gray-100 hover:text-gray-600'>+</Link>

  )
}

export default Button
