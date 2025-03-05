import { NavLink } from 'react-router-dom'
import style from './Product.module.css'

function Product({ product, add }) {

    const handle = (prod) => {
        add(prod)
    }

    return (
        <div className={style.product}>
            <NavLink to={`/products/${product.id}`}>
                <div className={style.container}>
                    <img src={product.image} />
                </div>
                <h2 className={style.title}>{product.title}</h2>
            </NavLink>
            <h2 className={style.price}>{product.price} $</h2>
            <button className={style.buy} onClick={() => handle(product)}>Buy</button>
        </div>
    )
}

export default Product