import React from 'react'
import SearchForm from '../components/SearchForm';
import BoxGrid from '../components/BoxGrid';
import AddBoxForm from '../components/AddBoxForm';

const Myboxes = async ({searchParams}) => {
  return (
    <div className='h-screen w-11/12 flex flex-col items-center w-[90%] mx-auto mt-48'>
      <p className='text-black text-9xl font-bold uppercase w-full'>My boxes</p>
      <div className='bg-black w-full h-[4px] my-8'></div>
      <SearchForm />
      <BoxGrid searchParams={searchParams}/>
      <AddBoxForm />
    </div>
  )
}

export default Myboxes
