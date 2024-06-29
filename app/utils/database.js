import mongoose from 'mongoose'

let isConnected = false;

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
  if (isConnected){
    return console.log('Database already connected!')
  }
  if(!MONGO_URI) {
    throw new Error ('Missing Enviroment Variables')
  }
  mongoose.connect(MONGO_URI, {
    dbName: 'organize'
  })
  isConnected = true;
  console.log('Database connected!')
}

export default connectDB;