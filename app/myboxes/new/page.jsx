import AddBoxForm from '@/app/components/AddBoxForm'
import React from 'react'

const NewBox = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-12'>ADD A NEW BOX</h1>
      <AddBoxForm />
    </div>
  )
}

export default NewBox
