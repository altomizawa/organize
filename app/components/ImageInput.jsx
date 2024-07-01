'use client'

import { CldUploadButton, CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react'

import React from 'react'

const ImageInput = () => {
  const [image, setImage] = useState('')
  return (
    <div>
       <div>
          <label htmlFor="photo">Photo:</label>
          <input className='border border-black px-2 w-full hidden' name='photo' type="text" value={image} />
        </div>
       {!image && <CldUploadButton 
        onUpload={(result) => {setImage(result.info.public_id)}}
        uploadPreset='noe26wby'
        className='text-white py-2 px-4 bg-black'>
        UPLOAD
      </CldUploadButton>}
      {image && <CldImage
        width="200"
        height="200"
        src={image}
        sizes="100vw"
        className='h-[200px] w-auto'
        alt="Description of my image"
      />}
    </div>
  )
}

export default ImageInput
