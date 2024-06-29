import BoxCard from './BoxCard'
import { getBoxes } from '../lib/data'

const BoxGrid = async () => {
  const filter = {
    'contents': {
      '$regex': 'spo', 
      '$options': 'i'
    }
  };
  
  const res = await getBoxes(filter);
  const boxes = await res.json()
  return (
    <div className='flex gap-8 flex-wrap mx-auto'>
        {boxes.map((box) => (
          <BoxCard box={box} key={box._id}/>
        ))}
      </div>
  )
}

export default BoxGrid
