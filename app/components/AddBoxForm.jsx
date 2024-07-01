import { createBox } from '../lib/data'
import boxPlaceholder from '@/public/src/box-placeholder.jpg'
import { revalidatePath } from 'next/cache'
import { RedirectType, redirect } from 'next/navigation'
import ImageInput from './ImageInput'
import CancelButton from './ui/CancelButton'

async function handleForm(formData){
  'use server'
  const boxCode = formData.get('boxCode')
  const category = [formData.get('room')]
  const contents = formData.get('contents').split(',')
  const photos = formData.get('photo')
  const location = formData.get('location')
  console.log(boxCode, category, contents)

  await createBox({boxCode, category, contents, photos, location})
  revalidatePath('/')
  redirect(`/myboxes`)
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
        <ImageInput />
        <div>
          <label htmlFor="location">Location:</label>
          <input className='border border-black px-2 w-full' name='location' type="text" />
        </div>
        <div className='w-full flex justify-center gap-8'>
          <CancelButton />
          <button type='submit' className='px-4 py-2 bg-blue-400 text-white font-bold mt-12'>CREATE</button>
        </div>
      </form>
    </div>
  )
}

export default AddBoxForm
