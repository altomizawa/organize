import React from 'react'
import SearchForm from '../components/SearchForm';
import BoxGrid from '../components/BoxGrid';

const Myboxes = async () => {

  // const res = await fetch('http://localhost:3000/api/boxes', {
  //   method: 'GET',
  //   cache: 'no-store'
  // })

  // const boxes = await res.json();

  // const query = searchParams?.query || '';

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center w-[90%] mx-auto'>
      <p className='text-black text-9xl font-bold uppercase w-full'>My boxes</p>
      <div className='bg-black w-full h-[4px] my-8'></div>
      <SearchForm />
      <BoxGrid />
    </div>
  )
}

export default Myboxes
