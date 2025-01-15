import React,{useContext} from 'react'
import '../components/Checkout.css'
import ShoppingContext from '../context/shopping/shopping.context'
import CheckOutProduct from './CheckOutProduct';
import Subtotal from './Subtotal'

const Checkout = () => {
    const shoppingContext = useContext(ShoppingContext);
    const {basket , user} = shoppingContext;

  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='checkout-ad'src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Pay_Balance/apay_page_mobile_new_logo.jpg' alt='' />
          <div>
           <h3>Hello, {user?.email}</h3>
            <h2 className='checkout-title'>Your Shopping Basket</h2>
              {basket.map((item) => (
                <CheckOutProduct
                 key={item.id}
                 id={item.id}
                 title={item.title}
                 price={item.price}
                 image={item.image}
                 rating={item.rating} 
                 />
                 ))}
          </div>
        </div>
        <div className='checkout-right'>
           <Subtotal />
        </div>
    </div>
  )
}

export default Checkout