import React, { useState, useEffect } from 'react'
import "./ProductComponent.css"
import { Heading } from '../Heading/Heading'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../redux/actions/productActions'
import { Link } from 'react-router-dom'
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <Link to={`/product/${id}`} className = "link" key={id}>
                <div className='product__main' >
                    <div className='product__main__image'>
                        <img src={image} alt='image' className='product__main__image-img' />
                    </div>
                    <div className='product__main__detail' >
                        {/* <p className='product__main__detail-category' >{i}</p> */}
                        <h5 className='product__main__detail-category'>{category}</h5>
                        <h3 className='product__main__detail-title'>{title}
                        </h3>
                        <h6 className='product__main__detail-price'>${price}</h6>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <>
            {renderList}

        </>
    )
}
export default ProductComponent

/*
 <div className='product__main'>
                    <div className='product__main__image'>
                        <img src='images/jacket.jpg' alt='image' className='product__main__image-img' />
                    </div>
                    <div className='product__main__detail'>
                        <h5 className='product__main__detail-category'>Category</h5>
                        <h3 className='product__main__detail-title'>Mens Winter Leathers Jackets
                        </h3>
                        <h6 className='product__main__detail-price'>$40.00</h6>
                    </div>
                </div>
                <div className='product__main'>
                    <div className='product__main__image'>
                        <img src='images/jacket.jpg' alt='image' className='product__main__image-img' />
                    </div>
                    <div className='product__main__detail'>
                        <h5 className='product__main__detail-category'>Category</h5>
                        <h3 className='product__main__detail-title'>Mens Winter Leathers Jackets
                        </h3>
                        <h6 className='product__main__detail-price'>$40.00</h6>
                    </div>
                </div>
                <div className='product__main'>
                    <div className='product__main__image'>
                        <img src='images/jacket.jpg' alt='image' className='product__main__image-img' />
                    </div>
                    <div className='product__main__detail'>
                        <h5 className='product__main__detail-category'>Category</h5>
                        <h3 className='product__main__detail-title'>Mens Winter Leathers Jackets
                        </h3>
                        <h6 className='product__main__detail-price'>$40.00</h6>
                    </div>
                </div>
                <div className='product__main'>
                    <div className='product__main__image'>
                        <img src='images/jacket.jpg' alt='image' className='product__main__image-img' />
                    </div>
                    <div className='product__main__detail'>
                        <h5 className='product__main__detail-category'>Category</h5>
                        <h3 className='product__main__detail-title'>Mens Winter Leathers Jackets
                        </h3>
                        <h6 className='product__main__detail-price'>$40.00</h6>
                    </div>
 
 
 
                    </div>



                     {
                (products && products.length > 0) ?
                    products.map((product) => <div className='product__main__container' key={id}>
                        <Link to={`/product/${id}`}>
                            <div className='product__main' >
                                <div className='product__main__image'>
                                    <img src={image} alt='image' className='product__main__image-img' />
                                </div>
                                <div className='product__main__detail' >
                                    {/* <p className='product__main__detail-category' >{i}</p>
                    //                 <h5 className='product__main__detail-category'>{category}</h5>
                    //                 <h3 className='product__main__detail-title'>{title}
                    //                 </h3>
                    //                 <h6 className='product__main__detail-price'>${price}</h6>
                    //             </div>
                    //         </div>
                    //     </Link>

                    // </div>
                    // ) : <h1>Loading</h1>
            // }


// */