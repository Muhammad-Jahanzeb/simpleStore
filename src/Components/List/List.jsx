import Item from '../Item/Item'
import './List.css'
import Loading from '../Loading/Loading'
import { ShopContext } from '../../Context/context'
import { useContext } from 'react'

const List = () => {
  const {products} = useContext(ShopContext)
  return (
    <div className='listContainer'>
      {products.length > 0 ?
          products.map(item => 
            <Item key={item.id} image={item.image} id ={item.id} price={item.price} title={item.title} rating={item.rating} />
          ) : <Loading/>}
    </div>
  )
}

export default List
