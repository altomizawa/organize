import Box from '@/app/models/box';
import connectDB from '@/app/utils/database';
import { NextResponse } from 'next/server';

const GET = async (filter) => {

  await connectDB();
  try{
    const boxes = await Box.find()
    if(!boxes) {
      throw new Error({message: 'Error getting boxes'})
    }
    return NextResponse.json(boxes)

  } catch (err) {
    console.error('Database error', err.message)
  }
}

export {GET}