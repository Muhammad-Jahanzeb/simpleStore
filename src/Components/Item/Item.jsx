import { useContext } from 'react'
import { ShopContext } from '../../Context/context'

import './Item.css'

const Item = (props) => {
  const {id, title, price, rating, image} = props
  const{addItem} = useContext(ShopContext)
  return (
    <div className="card">
        <div className="imgBox">
        <img src={image} alt={title} className="mouse"/>
        </div>

        <div className="contentBox">
            <h3>{title}</h3>
            <h2 className="price">{price} $</h2>
            <button className="buy" onClick={()=>addItem(id)}>Buy Now</button>
        </div>

    </div>
  )
}

export default Item
