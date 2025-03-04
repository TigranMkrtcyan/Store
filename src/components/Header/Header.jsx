import { IoCartOutline } from "react-icons/io5";

import style from './Header.module.css'

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.logo}>LOGO</h1>
      <div className={style.nav}>
        <NavLink to='/'>
          <h2>Home</h2>
        </NavLink>
        <NavLink to='/products'>
          <h2>Products</h2>
        </NavLink>
      </div>
      <div>
      <NavLink to='/cart'>
        <div>
          <IoCartOutline className={style.cart} />
        </div>
      </NavLink>
        <NavLink to={'/login'}>
          <button className={style.login}>
            Login
          </button>
        </NavLink>
        <NavLink to={'/registration'}>
          <button className={style.login}>
            Registration
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Header