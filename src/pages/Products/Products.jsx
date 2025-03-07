import { useContext } from "react"
import Product from "../../components/Product/Product"

import style from './Products.module.css'
import { MyContext } from "../../Data/context"

function Products() {
    
    const { products , add} = useContext(MyContext)

    return (
        <div className= {style.products}>
            {
                products.map((el) => {
                    return <Product product = {el} key={el.id} add = {add}/>
                })
            }
        </div>
    )
}

export default Products