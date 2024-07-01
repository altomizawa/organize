'use client'
import { useRouter } from 'next/navigation';

import Image from 'next/image'

const NavImage = () => {
  const router = useRouter();
  return (
    <Image onClick={()=>{router.push('/')}}width={96} height={96} className='cursor-pointer' priority={true} src="https://t4.ftcdn.net/jpg/01/91/33/91/360_F_191339183_chOk3ZX83SVQvmH1vIw1AIdTPoBHwu9P.jpg" alt="logo"/>   
  )
}

export default NavImage
