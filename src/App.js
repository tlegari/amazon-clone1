import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/Product/ProductDetails';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { useContext, useEffect } from 'react';
import ShoppingContext from './context/shopping/shopping.context';
import { auth } from './firebase';

function App() {

    const shoppingContext = useContext(ShoppingContext);
    const { setUser } = shoppingContext;

    useEffect (() => {
      auth.onAuthStateChanged((authUser) => {
        console.log('user is  ->', authUser)

        if(authUser){
          setUser(authUser)
        }else{
          setUser(null);
        }
      });
    }, []);
    
  return (
  <Router>
   <Header />
   <div>
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/products/:id' element={<ProductDetails />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/payment' element={<Payment />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
   </div>
  </Router>
  );
}

export default App;
