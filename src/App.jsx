import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  const discountedPrice = price - discount;
  const vat = discountedPrice * 0.07;

  return (
    <div className="container">
      <h1>VAT Calculator</h1>
      <label>
        Price    
        <input type="number" value={price.toString()} onChange={e => setPrice(Number(e.target.value))}/>
      </label>
      <br />
      <label>
        Discount 
        <input type="number" value={discount.toString()} onChange={e => setDiscount(Number(e.target.value))}/>
      </label>
      <br />  
      <p>Gross Price = {discountedPrice.toFixed(2)}</p>
      <br />
      <p>Vat = {vat.toFixed(2)}</p>
    </div>
  );
}

export default App
