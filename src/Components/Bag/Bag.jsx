import { useContext } from 'react'
import {ShopContext} from '../../Context/context'
import Bagcard from '../Bagcard/Bagcard.jsx'

import './Bag.css'


const Bag = () => {
    const {cart} = useContext(ShopContext)
    const containsValue = Object.values(cart).some(value => value > 0)
    console.log(containsValue)
    return (
      <>
        {containsValue?
          <Bagcard/>:"Cart Empty"
        }
      </>
    )
}

export default Bag
