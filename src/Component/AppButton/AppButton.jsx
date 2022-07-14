import React from 'react'
import "./AppButton.css"
import {AiOutlineShoppingCart} from 'react-icons/ai'

const AppButton = (props) => {
  return (
    <>
        <div className='home__button'>
            {props.title} <AiOutlineShoppingCart/>
        </div>
    </>
  )
}

export default AppButton