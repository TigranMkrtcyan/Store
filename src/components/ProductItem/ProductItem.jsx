import { useState , useEffect, useContext } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import style from './ProductItem.module.css'
import { MyContext } from "../../Data/context"

const ProductItem = () => {
    const [prod, setProd] = useState([])
    const { id } = useParams()

    const { URL } = useContext(MyContext)

    useEffect(() => {
        axios.get(URL + `/${id}`)
            .then((res) => setProd(res.data))
    }, [])

    return (
        <>
        <div className={style.card}>
          <img src={prod.image} alt="" className={style.img}/>
          <div className={style.section}>
            <div className={style.box}>
              <h1 className={style.h}>{prod.title}</h1>
              <h3 className={style.cat}>Category - {prod.category}</h3>
            </div>
            <p className={style.des}>{prod.description}</p>
            <div className={style.pay}>
              <h2 className={style.price}>{prod.price}$</h2>
              <button className={style.buy} >BUY</button>
            </div>
          </div>
        </div>
      </>
    )
}

export default ProductItem