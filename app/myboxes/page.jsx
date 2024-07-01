import React from 'react'
import SearchForm from '../components/SearchForm';
import BoxGrid from '../components/BoxGrid';
import AddBoxForm from '../components/AddBoxForm';
import { getBoxes, createBox } from '../lib/data'


const Myboxes = async ({searchParams}) => {
  const query = searchParams.query || ""
  const category = searchParams.category || ""

  const filter = {
    'category': category,
    'contents': {
      '$regex': `${query}`, 
      '$options': 'i'
    }
  };

  const res = await getBoxes(filter);
  const boxes = await res.json()

  return (
    <div className='min-h-screen w-11/12 flex flex-col items-center w-[90%] mx-auto mt-48 pb-36'>
      <p className='text-black text-9xl font-bold uppercase w-full'>My boxes</p>
      <div className='bg-black w-full h-[4px] my-8'></div>
      <SearchForm category={category} />
      <BoxGrid boxes={boxes}/>
    </div>
  )
}

export default Myboxes
