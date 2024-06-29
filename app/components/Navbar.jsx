const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-12 fixed top-0 left-0 z-10 w-screen bg-white'>
      <img className='w-24' src="https://t4.ftcdn.net/jpg/01/91/33/91/360_F_191339183_chOk3ZX83SVQvmH1vIw1AIdTPoBHwu9P.jpg" alt="logo"/>   
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
