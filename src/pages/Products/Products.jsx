import Product from "../../components/Product/Product"

import style from './Products.module.css'

function Products({ products , add}) {
    
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