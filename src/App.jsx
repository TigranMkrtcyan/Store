import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyContext } from './Data/context'

import axios from 'axios'

import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import Products from './pages/Products/Products'
import CartPage from './pages/CartPage/CartPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import Profile from './pages/Profile/Profile'
import ProductItem from './components/ProductItem/ProductItem'

import style from './App.module.css'

function App({ data }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [users, setUsers] = useState([...data.users])

  const BaseURL = "https://fakestoreapi.com/products"

  useEffect(() => {
    axios.get(BaseURL)
      .then((res) => setProducts(res.data.map((el) => {
        return {
          ...el,
          count: 1,
          cartPrice: el.price
        }
      })))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const DeleteProd = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter((el) => el.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  const ChangeCount = (count, id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map((el) => el.id === id ? { ...el, count, cartPrice: el.price * count } : el);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  const AddToCart = (prod) => {
    setCart(prevCart => {
      let updatedCart;
      if (!prevCart.some(item => item.id === prod.id)) {
        updatedCart = [...prevCart, { ...prod, count: 1 }];
      } else {
        updatedCart = prevCart.map(el =>
          el.id === prod.id ? { ...el, count: el.count + 1, cartPrice: el.cartPrice + el.price } : el
        );
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const ClaerPage = () => {
    setCart([]);
    localStorage.removeItem('cart');
  }

  const Add = (newuser) => {
    setUsers((prev) => [...prev, newuser]);
    console.log(users);
  }

  return (
    <div className={style.app} >
      <MyContext.Provider value={{
        products,
        add: AddToCart,
        URL: BaseURL,
        carts: cart,
        ChangeCount,
        DeleteProd,
        CartPage,
        users,
        val: data.validationSchema,
        Add
      }}
      >
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
  )
}

export default App