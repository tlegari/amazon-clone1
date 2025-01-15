import { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingContext from '../../context/shopping/shopping.context'
import { auth } from '../../firebase';




const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const {basket, user} = shoppingContext;

 const handleAuthentication = () => {
     if(user) {
      auth.signOut();

    }
  }

  return (
    
    <header className='header'>
     <Link to='/'>
      <img className='header-logo' src='https://freepnglogo.com/images/all_img/1715487998amazon-logo-transparent.png' alt='Amazon logo'></img>
     </Link>
     
      <div className='header-search'>
        <input className='header-input' type='text'/>
       <SearchIcon className='search-icon'/>
      </div>

      <div className='header-nav'>
          <Link to={!user && '/login'}>
        <div className='header-option' onClick={handleAuthentication}>
          <span className='header-optionOne'>Hello {!user ? "Guest" : user.email}</span>
          <span className='header-optionTwo'>{user ? "Sign Out" : "Sign in"}</span>
        </div>
        </Link>
        
        <div className='header-option'>
          <span className='header-optionOne'>Returns</span>
          <span className='header-optionTwo'>& Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-optionOne'>Your</span>
          <span className='header-optionTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
        <div className='header-optionThree'>
        <ShoppingBasketIcon className='shopping-basket' /> 
        <span className=' header-basketCount'>{basket?.length}</span>
        </div>
        </Link>
      </div>
    </header>
    )}


export default Header;