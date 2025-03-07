import { useContext } from 'react'
import Cart from '../../components/Cart/Cart'

import style from './CartPage.module.css'
import { MyContext } from '../../Data/context'

function CartPage() {

  const { carts, ChangeCount, DeleteProd, ClaerPage } = useContext(MyContext)

  const clear = () => {
    ClaerPage()
  }

  const totalPrice = carts.reduce((acc, el) => acc + el.price * el.count, 0);
  
  return (
    <div className={style.carts}>
      {
        carts.map((el) => {
          return <Cart cart={el} key={el.id} ChangeCount={ChangeCount} DeleteProd={DeleteProd} />
        })
      }
      <div className={style.end}>
        <button onClick={clear} className={style.cl}>Clear</button>
        <h1 className={style.h1}>Total Price - {totalPrice}$</h1>
      </div>
    </div>
  )
}

export default CartPage