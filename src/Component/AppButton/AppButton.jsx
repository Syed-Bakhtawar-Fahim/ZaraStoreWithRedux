import React from 'react'
import "./AppButton.css"
import {AiOutlineShoppingCart} from 'react-icons/ai'

const AppButton = () => {
  return (
    <>
        <div className='home__button'>
            Shop Now <AiOutlineShoppingCart/>
        </div>
    </>
  )
}

export default AppButton