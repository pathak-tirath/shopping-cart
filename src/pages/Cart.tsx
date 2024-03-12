import {useContext} from 'react'
import UserContext from '../context/UserContext'
import { FormatCurrency } from '../utils/FormatCurrency'

const Cart = () => {
  const {quantity} = useContext(UserContext)
  return (
    <div>
      { quantity.filter(item => item.id !== 0)?.map(item => (
        <div className='flex pt-10 w-full justify-between'>
          <div><img  className="w-60 h-60 object-cover" src={item.imgUrl} /></div>
          <div>
            <div>{item.name}</div>
            <div><FormatCurrency price={item.price} /></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart