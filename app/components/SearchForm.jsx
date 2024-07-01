'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';

const SearchForm = ({ category }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchContents = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(term)
  },300);

  const changeCategory = (term) => {
    const params = new URLSearchParams(searchParams)
    
    if (term) {
      params.set('category', term);
    } else {
      params.delete('category')
    }
    replace(`${pathname}?${params.toString()}`);
  };

  
  return (
      <form className='w-full flex'>
        <div className='flex mr-8 mb-8'>
          <label className=' text-nowrap h-full mr-4' htmlFor='room'>Select a room</label>
          <select className='border border-black h-8' name='room' onChange={(e) => changeCategory(e.target.value)}>
            <option value='' selected={category===''}>choose one</option>
            <option value='bedroom' selected={category==='bedroom'}>Bedroom</option>
            <option value='living room' selected={category==='living room'}>Living Room</option>
            <option value='kitchen' selected={category==='kitchen'}>Kitchen</option>
            <option value='bathroom' selected={category==='bathroom'}>Bathroom</option>
            <option value='dining room' selected={category==='dining room'}>Dining Room</option>
            <option value='garage' selected={category==='garage'}>Garage</option>
          </select>
        </div>
        <div className='w-full flex'>
          <label className='mr-4 text-nowrap' htmlFor='search'>What are you looking for?</label>
      <input
          className='border border-black text-black py-1 px-2 text-sm w-full h-min'
      type='text' name='search'
      placeholder='start typing'
      onChange={(e)=> {searchContents(e.target.value)}}
      defaultValue={searchParams.get('query')?.toString()}
       />
        </div>
    </form>
  )
}

export default SearchForm
