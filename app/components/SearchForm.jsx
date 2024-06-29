'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';

const SearchForm = () => {
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

  
  return (
      <form className='w-full flex items-baseline'>
      <label className='mr-4 text-nowrap h-full' htmlFor='search'>What are you looking for?</label>
      <input
      className='border border-black text-black py-1 px-2 mb-8 w-full text-sm'
      type='text' name='search'
      placeholder='start typing'
      onChange={(e)=> {searchContents(e.target.value)}}
      defaultValue={searchParams.get('query')?.toString()}
       />
    </form>
  )
}

export default SearchForm
