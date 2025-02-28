import { useEffect, useState } from 'react'

import style from './Home.module.css'

import Advertising from '../../components/Advertising/Advertising'

function Home() {
  const [prod, setProd] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((res) => res.json())
      .then((res) => setProd(res))
  }, [])

  return (
    <div className= {style.h}>
      <h1 className= {style.title}>New Men's Clothing</h1>
      <div className={style.home}>     
          {
            prod.map((el) => {
              return <Advertising prod={el} key={el.id} />
            })
          }
      </div>
    </div>
  )
}

export default Home