import Cart from '../../components/Cart/Cart'

import style from './CartPage.module.css'

function CartPage({ carts, ChangeCount, DeleteProd, ClaerPage }) {

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