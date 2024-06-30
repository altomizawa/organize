'use client'

import { CldUploadButton, CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

const Cloudinary = () => {
  const[image, setImage] = useState('')
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-24'>
      <CldUploadButton 
        onUpload={(result) => {setImage(result.info.public_id)}}
        uploadPreset='noe26wby'
        className='text-white py-2 px-4 bg-black'>
        UPLOAD
      </CldUploadButton>
 
      {image && <CldImage
        width="500"
        height="400"
        src={image}
        sizes="100vw"
        alt="Description of my image"
      />}
    </div>
  )
}

export default Cloudinary
