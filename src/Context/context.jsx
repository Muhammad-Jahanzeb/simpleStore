import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ShopContext = createContext(null)

//initialze cart with 0
const getItems=(products)=>{
  try{
    let cart = {}
    products.forEach(product => {
      cart[product.id] = 0
    });

    return cart
  }
  catch(error){
    console.log("Error in populating items.\n",error)
  }
}

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getItems([]))
  const [products, setProducts] = useState([])
  const [item, setItem] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>
    {setCart(getItems(products))
     console.log("CART", cart)      
    },[products]
  )

  useEffect(()=>{
    incrementItem()
  },[cart])

  const incrementItem =()=>{
    try{
      let count = 0
      products.forEach(product=>{
        if(cart[product.id]!==0){
          count = count+1
        }
        setItem(count)
      })
    }

    catch(error){
      console.log("Error in incrementing cart item.\n", error)
    }
  }

  const fetchData = async()=>{
    try{
      const url ="https://fakestoreapi.com/products"
      const response = await axios.get(url)
      setProducts(response.data)
      console.log("PRODUCTS:\n", products)
    }
    catch(error){
      console.log("Error in fetching data.\n",error)
    }
  }

  const addItem =(itemId)=>{
    try{
      console.log('ID', itemId)
      setCart(prev=>({
        ...prev,
        [itemId]:prev[itemId] + 1
      })
      )

      console.log(cart)
    }
    catch(error){
      console.log("Error in adding item.\n", error)
    }
  }

  const removeItem =(itemId)=>{
    try{
      if(cart[itemId]>0){
        setCart(prev=>({
          ...prev,
          [itemId]:prev[itemId] - 1
        })
        )
      }
    }
    catch(error){
      console.log("Error in adding item.\n", error)
    }
  }
  const contextValue = {cart, products, item, total, setTotal,addItem, removeItem}

  return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>)
}

export default ShopContextProvider
