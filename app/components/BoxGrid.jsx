import BoxCard from './BoxCard'
import { getBoxes, createBox } from '../lib/data'
import Button from './Button'

const BoxGrid = async ({searchParams}) => {
  const query = searchParams.query || ""
  const category = searchParams.category || ""
  console.log(category, query)

  const filter = {
    'category': category,
    'contents': {
      '$regex': `${query}`, 
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
      <Button />
    </div>
  )
}

export default BoxGrid
