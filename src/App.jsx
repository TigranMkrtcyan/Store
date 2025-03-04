import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'

import style from './App.module.css'

import Layout from './components/Layout/Layout'
import Products from './pages/Products/Products'
import CartPage from './pages/CartPage/CartPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import Profile from './pages/Profile/Profile'

function App({data}) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [users, setUsers] = useState([data.users])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res.map((el) => {
        return {
          ...el,
          count: 1,
          cartPrice: el.price
        }
      })))
  }, [])

  const DeleteProd = (id) => {
    setCart(cart.filter((el) => el.id !== id))
  }

  const ChangeCount = (count, id) => {
    setCart(cart.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          count: count,
          cartPrice: el.price * count
        }
      } else {
        return el
      }
    }))
  }

  const AddToCart = (prod) => {
    if (!cart.some(item => item.id === prod.id)) {
      setCart([...cart, { ...prod, count: 1 }]);
    } else {
      setCart(cart.map(el =>
        el.id === prod.id ? { ...el, count: el.count + 1, cartPrice: el.cartPrice + el.price } : el
      ));
    }
  };

  const ClaerPage = () => {
    setCart([])
  }

  return (
    <div className={style.app} >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} add={AddToCart} />} />
          <Route path='/cart' element={<CartPage carts={cart} ChangeCount={ChangeCount}  DeleteProd = {DeleteProd} ClaerPage = {ClaerPage}/>} />
          <Route path='/login' element = {<LoginPage users = {users}/>} />
          <Route path='/registration' element = {<RegistrationPage />} />
          <Route path='/profile' element = {<Profile />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App