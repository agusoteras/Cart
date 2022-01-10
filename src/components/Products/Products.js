import React, {useState} from 'react'
import "./products.css"

const Products = ({products, cart, setCart, setCount, count}) => {


const handler = (items) => {
setCart([...cart, {name: items.name, price: items.price, id: items.id}])
setCount(count +1)
}

console.log(cart);

    return (
        <div className='products'>
            {
                products.map((items)=>
                <div className='articles'>
                    <img src={items.image}></img>
                    <h4>{items.name}</h4>
                    <h5>${items.price}</h5>
                    <button className='btn btn-dark' onClick={()=> handler(items)}>Añadir</button>
                </div>
                )
            }
        </div>
    )
}

export default Products
