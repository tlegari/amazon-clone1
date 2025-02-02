import React, { useContext, useEffect, useState } from 'react';
import axios from '../axios';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingContext from '../context/shopping/shopping.context';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckOutProduct from './CheckOutProduct';
import CurrencyFormat from 'react-currency-format';
import './Payment.css';
import { db } from '../firebase';

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(null); // initial state is null

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(
         'http://localhost:5001/clone-619c2/us-central1/api/payments/create',
         { total: getBasketTotal(basket) * 100 }
       );
       setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log('The secret is => ', clientSecret);

  const handleSubmit = async (e) => {
   e.preventDefault();
   setProcessing(true);
 
   if (!clientSecret) {
     setError("Payment could not be processed. Please try again.");
     setProcessing(false);
     return;
   }
 
   const payload = await stripe
     .confirmCardPayment(clientSecret, {
       payment_method: { card: elements.getElement(CardElement) },
     })
     .then(({ paymentIntent }) => {
       if (!paymentIntent) {
         setError("Payment failed. No payment intent returned.");
         setProcessing(false);
         return;
       }
 
       db.collection("users")
         .doc(user?.uid)
         .collection("orders")
         .doc(paymentIntent.id)
         .set({
           basket: basket,
           amount: paymentIntent.amount,
           created: paymentIntent.created,
         });
 
       setSucceeded(true);
       setError(null);
       setProcessing(false);
       emptyBasket();
       navigate("/orders");
     })
     .catch((err) => {
       console.error("Payment error:", err);
       setError("Payment failed. Please try again.");
       setProcessing(false);
     });
 };
 

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : ''); // Correct error message reference
  };

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
            <h3>Review items and Delivery</h3>
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
          <div className='payment-details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment-price-container'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
