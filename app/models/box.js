import mongoose, { Schema, model, models } from 'mongoose';

const boxSchema = new Schema({
  boxCode: {
    type: String, 
    required: true,
  },
  category: [String],
  contents: [String],
  photos: [String],
  created: {
    type: Date, 
    default: Date.now
  },
  location: {
    type: String,
    required: true,
  }
})

const Box = mongoose.models.Box || mongoose.model('Box', boxSchema)

export default Box;