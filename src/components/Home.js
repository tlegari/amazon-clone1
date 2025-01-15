import React from 'react';
import './Home.css';
import Products from './Products/Products';

const Home = () => {
  return (
    <div className='home'>
        <div className='home-container'>
          <img className='home-image' src='https://m.media-amazon.com/images/I/61UTMOTO+ML._SX3000_.jpg' 
          alt='Hero image'></img>
          <Products />
        </div>
        {/*<Route path='/home/username'>
        <p>Welcome username!</p>
        </Route>*/}
    </div>
  )
}

export default Home;