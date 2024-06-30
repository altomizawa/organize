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
        <CldUploadButton 
        onUpload={(result) => {setImage(result.info.public_id)}}
        uploadPreset='noe26wby'
        className='text-white py-2 px-4 bg-black'>
        UPLOAD
      </CldUploadButton>
    </div>
  )
}

export default ImageInput
