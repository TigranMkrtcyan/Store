import { useState } from 'react'
import style from './Cart.module.css'

function Cart({ cart, ChangeCount, DeleteProd }) {
    let [count, setCount] = useState(cart.count)

    const remove = () => {
        DeleteProd(cart.id)
    }

    const Plus = () => {
        setCount(++count)
        ChangeCount(count , cart.id)
    }

    const Minus = () => {
        if (count >= 1) {
            setCount(--count)
            ChangeCount(count, cart.id)
        }
    }

    return (
        <div className={style.cart}>
            <div className={style.h1}>
                <h1 className={style.title}>{cart.title}</h1>
            </div>
            <img src={cart.image} className={style.img} />
            <div className={style.btns}>
                <button className={style.btn} onClick={Plus}>+</button>
                <h2 className={style.count}>{count}</h2>
                <button className={style.btn} onClick={Minus}>-</button>
            </div>
            <h2 className={style.price}>{cart.cartPrice.toFixed(1)}$</h2>
            <button className={style.del} onClick={remove}>Delete</button>
        </div>
    )
}

export default Cart