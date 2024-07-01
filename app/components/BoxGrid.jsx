import BoxCard from './BoxCard'
import Button from './Button'

const BoxGrid = async ({boxes}) => {
  
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
