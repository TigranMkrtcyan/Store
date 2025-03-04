import React from 'react'
import { useLocation } from 'react-router-dom'

import { CgProfile } from "react-icons/cg";

import style from './Profile.module.css'

const Profile = () => {

    const { state } = useLocation()

    return (
        <div className= {style.box}>
            <CgProfile className={style.img}/>
            <h2 className={style.name}>Name : {state?.name}</h2>
            <h2 className={style.email}>Email : {state?.email}</h2>
        </div>
    )
}

export default Profile