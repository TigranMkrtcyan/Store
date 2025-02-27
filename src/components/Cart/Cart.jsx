import style from './Cart.module.css'

function Cart({ cart }) {
    return (

        <div className={style.cart}>
            <div className={style.h1}>
                <h1>{cart.title}</h1>
            </div>
            <img src={cart.image} />
            <h2>{cart.count}</h2>
            <h2>{cart.cartPrice.toFixed(1)}</h2>
        </div>
    )
}

export default Cart