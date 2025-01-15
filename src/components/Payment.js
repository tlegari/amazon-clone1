import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import ShoppingContext from '../context/shopping/shopping.context'
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import CheckOutProduct from './CheckOutProduct'
import CurrencyFormat from 'react-currency-format';
import './Payment.css'

const Payment = () => {
    const shoppingContext = useContext(ShoppingContext);
    const {basket, user, getBasketTotal} = shoppingContext;
  
 const handleSubmit = (e) => {
    e.preventDefault();
 };

 const handleChange = (e) => {


 }

  return (
    <div className='payment'>
        <div className='payment-container'>
         <h1>
            Checkout <Link to='/checkout'>{basket?.length} items</Link> 
         </h1>
         <div className='payment-section'>
            <div className='payment-title'>
               <h3>Delivery Address</h3> 
            </div>
            <div className='payment-address'>
               <p>{user?.email}</p>
               <p>123 REACTJS Road</p>
               <p>Cape Town, SA</p>
            </div>
         </div>
         <div className='payment-section'>
            <div className='payment-title'>
                <h3>Reviews items and Delivery</h3>
            </div>
            <div className='payment-items'>
                {basket.map((item) => (
                    <CheckOutProduct 
                    key={item.id} 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                    ))}
            </div>
          </div>
          <div className='payment-section'>
            <div className='payment-title'>
               <h3>Payment Method</h3> 
            </div>
            <div className='payment-details'>{/*stripe code will go here*/}
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment-price-container'>
                        <CurrencyFormat />
                    </div>
                </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Payment