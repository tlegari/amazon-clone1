import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
        <Link to='/'>
        <div>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png' alt='sorry display note'/>
        </div>
        <div>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/171._TTD_.jpg' alt='not found puppy ' />
        </div>
        </Link>     
    </div>
  )
}

export default NotFound