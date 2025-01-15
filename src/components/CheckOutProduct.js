import React, { useContext } from 'react'
import '../components/CheckOutProduct.css'
import ShoppingContext from '../context/shopping/shopping.context'

const CheckOutProduct = ({id, image, title, rating, price, hideButton}) => {
    const shoppingContext = useContext(ShoppingContext);
    const { removeFromBasket } = shoppingContext;

    const removeFromBasketHandler  = () => {
        removeFromBasket({ id: id });
    }
  return (
    <div className='Checkout-product'>
        <img className='Checkout-product-image'src={image} 
           alt='checkout_product_image'
        />
      <div className='Checkout-product-info'>
        <p className='Checkout-product-title'>{title}</p>
        <div className='product-rate'> 
        {Array(rating)
          .fill()
          .map((_, i) =>(<p>★</p>))
          } 
        </div>
        <p className='Checkout-product-price'><small>$</small><strong>{price}</strong></p>
        {!hideButton && (
        <button onClick={removeFromBasketHandler}>Remove From Basket</button>
        )}
      </div>
    </div>
  )
}

export default CheckOutProduct