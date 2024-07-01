import Image from 'next/image'
import { redirect } from 'next/navigation'
import NavImage from './ui/NavImage'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-12 fixed top-0 left-0 z-10 w-screen bg-white'>
      <NavImage />
      <nav className='flex gap-12'>
        <a href='/'>ABOUT</a>
        <a href='/'>PRODUCTS</a>
        <a href='/myboxes'>SERVICES</a>
        <a href='/'>CONTACT</a>
      </nav>  
      <button className='py-2 px-4 bg-blue-700 text-white font-bold uppercase'>ORGANIZE NOW</button> 
    </div>
  )
}

export default Navbar
