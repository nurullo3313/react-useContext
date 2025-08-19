import React from 'react'
import { BsCart4 } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate =  useNavigate()

  return (
    <header>
       <h1 onClick={navigate("/")} >Shop</h1> 
       <div onClick={navigate("/cart")} className='cart' >
            <BsCart4 className='icon-cart'/>
            <span>0</span>
       </div>
    </header>
  )
}
