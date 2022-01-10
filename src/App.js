import React, {useState} from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

/* IMAGES */
import tea1 from "../src/components/assets/tea1.jpg"
import tea2 from "../src/components/assets/tea2.jpg"
import tea3 from "../src/components/assets/tea3.jpg"
import tea4 from "../src/components/assets/tea4.jpg"
import tea5 from "../src/components/assets/tea5.jpg"
import tea6 from "../src/components/assets/tea6.jpg"


function App() {
  
  const [products, setProducts] = useState([
    {id:1, name: "Classic Tea", price: 180, image: tea1},
    {id:2, name: "Lemon Tea", price: 250, image: tea2},
    {id:3, name: "Chai Tea", price: 400, image: tea3},
    {id:4, name: "Asian Tea", price: 350, image: tea4},
    {id:5, name: "White Tea", price: 200, image: tea5},
    {id:6, name: "Turkish Tea", price: 300, image: tea6}
  ])
  
  const [cart, setCart] = useState([])
  
  const [count, setCount] = useState(0)
  
  return (  
             <div className="App">
                  <Cart products={products} cart={cart} setCart={setCart} count={count} setCount={setCount}/>
                  <Products products={products} cart={cart} setCart={setCart} count={count} setCount={setCount}/>
             </div>
  );
}

export default App;
