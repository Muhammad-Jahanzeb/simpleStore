import { useContext, useEffect, useState } from 'react'
import './SingleBagItem.css'
import { ShopContext } from '../../Context/context'

const SingleBagItem = (props) => {
  const {cart, addItem, removeItem} = useContext(ShopContext)

  const{title, id, price, image} = props
  const[amount, setAmount] = useState(price)

  useEffect(()=>{
    setAmount(cart[id] * price)
  },[cart])

  return (
    <div className='singleContainer'>
      <img src={image}/>
      <div className="quantityContainer">
        <button className='mathBtn' onClick={()=>addItem(id)}>+</button>
        <span>{cart[id]}</span>
        <button className='mathBtn' onClick={()=>removeItem(id)}>-</button>
      </div>
      <span>${price}</span>
      <span>${amount}</span>
    </div>
  )
}

export default SingleBagItem
