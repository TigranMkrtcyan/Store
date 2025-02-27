import Cart from '../../components/Cart/Cart'

import style from './CartPage.module.css'

function CartPage ({ carts }) {
  return (
    <div className= {style.carts}>
        {
          carts.map((el) => {
            return <Cart cart = {el} key={el.id}/>
          })
        }
    </div>
  )
}

export default CartPage