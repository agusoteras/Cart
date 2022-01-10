import React, {useState} from 'react'
import "./cart.css"
import Products from '../Products/Products'

const Cart = ({products, cart, setCart, count, setCount}) => {


const handlerDelete = (id) => {
 const eliminate = cart.filter((item)=> item.id !== id)
 setCart(eliminate)
 setCount(count -1)
}


const viewCart = () => { 
document.querySelector(".cartBox").classList.toggle("show")}
    

return (
        <div className='cart'>
           
           <div className='count'>
                 <h1>Tu Casa De Té</h1>
                 
                 <h5 className='countCart' onClick={()=>viewCart()}>{count} <i class="fas fa-shopping-cart"></i> </h5> 
           </div>
            
                <section className='cartBox show'>

                      <div className='cartContent'>
                        
                         {cart.length === 0 ? ("") : (cart.map((item)=> 
                         <div> 
                               <h6 key={item.id}>{item.name}<br></br> ${item.price}</h6> <br></br> 
                               <button className='btn btn-dark' onClick={()=>handlerDelete(item.id)}>Eliminar</button>
                 
                         </div>   ))}

                      </div>
                
                </section>
                   

           
             
        </div>
    )
}

export default Cart
