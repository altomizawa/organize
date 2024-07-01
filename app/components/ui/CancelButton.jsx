'use client'
import { useRouter } from 'next/navigation'

const CancelButton = () => {
  const router = useRouter();
  return (
    <div>
      <button type='button' className='px-4 py-2 bg-red-400 text-white font-bold mt-12' onClick={() => {
          console.log('redirect')
          router.push('/myboxes')
        }}>CANCEL</button>
    </div>
  )
}

export default CancelButton
