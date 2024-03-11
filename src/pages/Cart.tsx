import {useContext} from 'react'
import UserContext from '../context/UserContext'

const Cart = () => {
  const {quantity} = useContext(UserContext)
  console.log(quantity,'qu')
  return (
    <div>
      { quantity.filter(item => item.id !== 0)?.map(item => (
        <div className='flex pt-10 w-full justify-between'>
          <div><img  className="w-60 h-60 object-cover" src={item.imgUrl} /></div>
          <div>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart