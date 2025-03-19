import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MyContext } from './Data/context';
import axios from 'axios';

import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Products from './pages/Products/Products';
import CartPage from './pages/CartPage/CartPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Profile from './pages/Profile/Profile';
import ProductItem from './components/ProductItem/ProductItem';

import style from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAC } from './store/store';

function App({ data }) {
  const dispatch = useDispatch();
  const { products, cart, users } = useSelector((state) => state);

  const BaseURL = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(BaseURL)
      .then((res) => {
        dispatch(getProductAC(res.data))
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const AddToCart = (prod) => {
    dispatch({ type: 'addtocart', payload: prod })
  };

  const AddUser = (newUser) => {
    dispatch({ type: 'adduser', payload: newUser })
  };

  return (
    <div className={style.app}>
      <MyContext.Provider value={{
        products,
        add: AddToCart,
        URL: BaseURL,
        carts: cart,
        CartPage,
        users,
        val: data.validationSchema,
        Add: AddUser
      }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductItem />} />
            <Route path='/registration' element={<RegistrationPage />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
