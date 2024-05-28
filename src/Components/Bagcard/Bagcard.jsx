
import './Bagcard.css'
import SingleBagItem from '../SingleBagItem/SingleBagItem'
import { useContext, useEffect } from 'react'
import { ShopContext } from '../../Context/context'

const Bagcard = () => {
    const {item, products, cart, total, setTotal} = useContext(ShopContext)

    useEffect(()=>{
        let totalCost = 0
        products.forEach(product => {
            if(cart[product.id]!==0){
                console.log("Product ID: ", product.id)
                totalCost = totalCost + (cart[product.id] * product.price)
            }
        });
        // totalCost = totalCost.toFixed(2)
        setTotal(totalCost.toFixed(2))
    },[cart])

  return (
    <div className="cartContainer">
        <div className="itemList">
            <div className="headings">
                <h2>Shopping Cart</h2>
                <h2>{item} Items</h2>
            </div>
            <div className="line">

            </div>
            <div className="columnHeadings">
                <span>Product Details</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
            </div>
            {products.length > 0 ? 
            products.map(product=> 
            {if(cart[product.id]!==0){
                return (<SingleBagItem key={product.id} title={product.title} price ={product.price} image = {product.image} id = {product.id}/>)
            }}):null}
        </div>
        <div className="total">
            <div className="order">
                <h2>Order Summary</h2>
            </div>
            <div className="orderLine">

            </div>
            <div className="columnHeadings">
                <span>Items</span>
                <span>Price</span>
            </div>
            {products.map(product =>{ 
             if(cart[product.id]!==0){
                return (
                    <div className="details" key={product.id}>
                        <span>{product.title}</span>
                        <span> ${cart[product.id] * product.price}</span>
                </div>
                )
             }}
            )}
            <div className="totalContainer">
                <span>Total</span>
                <span>${total}</span>
            </div>
            <div className="btnContainer">
                <button className="checkout">Check Out</button>
            </div>
        </div>
    </div>
  )
}

export default Bagcard
