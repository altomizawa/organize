import Box from '@/app/models/box';
import connectDB from '@/app/utils/database';
import { NextResponse } from 'next/server';

const POST = async (req) => {
  await connectDB();
  const { boxCode, category, contents, photos, location } = req.json();
  try{
    const res = await Box.create({
      boxCode,
      category,
      contents,
      photos,
      location,
    })
    if (!res) {
      throw new Error('error creating box')
    }
    // const newBox = await res.json()
    return NextResponse.json(res)
  } catch (err) {
    NextResponse.error('Server error', err.message)
  }
}

export {POST}
