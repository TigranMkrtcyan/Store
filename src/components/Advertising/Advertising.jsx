import style from './Advertising.module.css'

import { NavLink } from 'react-router-dom'

function Advertising({ prod }) {

    return (
        <NavLink to='/products'>
        <div className={style.product}>
            <div className= {style.container}>
                <img src={prod.image} />
            </div>
            <h2 className={style.title}>{prod.title}</h2>
        </div>
        </NavLink>
    )
}

export default Advertising