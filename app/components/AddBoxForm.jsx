import React from 'react'
import { createBox } from '../lib/data'

// const handleForm = async (formData) =>{
//   const room = formData.get('room')
//   console.log(room)
// }

async function handleForm(formData){
  'use server'
  const boxCode = formData.get('boxCode')
  const category = [formData.get('room')]
  const contents = [formData.get('contents')]
  const photos = formData.get('photo')
  const location = formData.get('location')
  await createBox({boxCode, category, contents, photos, location})
}

const AddBoxForm = () => {
  return (
    <div>
      <form  className='border border-black p-12 flex flex-col gap-4' action={handleForm}>
        <h2>Add new Box</h2>
        <div>
          <label htmlFor="boxCode">Box Code:</label>
          <input className='border border-black px-2 w-full' name='boxCode' type="text" />
        </div>
        <div>
        <label className=' text-nowrap h-full mr-4' htmlFor='room'>Select a room</label>
          <select className='border border-black h-max w-full' name='room'>
            <option value='bedroom'>Bedroom</option>
            <option value='living room'>Living Room</option>
            <option value='kitchen'>Kitchen</option>
            <option value='bathroom'>Bathroom</option>
            <option value='dining room'>Dining Room</option>
            <option value='garage'>Garage</option>
          </select>
        </div>
        <div>
          <label htmlFor="contents">Content:</label>
          <input className='border border-black px-2 w-full' name='contents' type="text" />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input className='border border-black px-2 w-full' name='photo' type="text" />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input className='border border-black px-2 w-full' name='location' type="text" />
        </div>
        <button className='px-4 py-2 bg-blue-400 text-white font-bold mt-12'>CREATE</button>
      </form>
    </div>
  )
}

export default AddBoxForm
