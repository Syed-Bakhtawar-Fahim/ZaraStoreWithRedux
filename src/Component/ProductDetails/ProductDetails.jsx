import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProducts, removeSelectedProducts } from '../../redux/actions/productActions'
import AppButton from '../AppButton/AppButton'
import "./ProductDetails.css"
import axios from "axios";

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { image, price, title, description } = product
    const { productId } = useParams()
    const dispatch = useDispatch()
    // console.log(product)
    // console.log(productId)

    useEffect(() => {
        const fetchProductsDetails = async () => {
            const response = await axios
                .get(`https://fakestoreapi.com/products/${productId}`)
                .catch((err) => {
                    console.log("Error in Product Details", err)
                })
            dispatch(selectedProducts(response.data))
        }
        if (productId && productId !== "")
            fetchProductsDetails()
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [productId, dispatch])


    return (
        <>
            {product.length === 0 ? <h1>Loading</h1> :
                <div className="product-featured">

                    <div className="showcase-wrapper has-scrollbar">

                        <div className="showcase-container">

                            <div className="showcase">

                                <div className="showcase-banner">
                                    <img src={image} alt="shampoo, conditioner & facewash packs" className="showcase-img" />
                                </div>

                                <div className="showcase-content">

                                   
                                        <h3 className="showcase-title">{title}</h3>
                                   

                                    <p className="showcase-desc">
                                        {description}
                                    </p>

                                    <div className="price-box">
                                        <p className="price">${price}</p>

                                        <del>$200.00</del>
                                    </div>

                                    {/* <button className="add-cart-btn">add to cart</button> */}
                                    <AppButton title="Add to Cart" />

                                    <div className="showcase-status">
                                        <div className="wrapper">
                                            <p>
                                                already sold: <b>20</b>
                                            </p>

                                            <p>
                                                available: <b>40</b>
                                            </p>
                                        </div>

                                        <div className="showcase-status-bar"></div>
                                    </div>

                                    <div className="countdown-box">

                                        <p className="countdown-desc">
                                            Hurry Up! Offer ends in:
                                        </p>

                                        <div className="countdown">

                                            <div className="countdown-content">

                                                <p className="display-number">360</p>

                                                <p className="display-text">Days</p>

                                            </div>

                                            <div className="countdown-content">
                                                <p className="display-number">24</p>
                                                <p className="display-text">Hours</p>
                                            </div>

                                            <div className="countdown-content">
                                                <p className="display-number">59</p>
                                                <p className="display-text">Min</p>
                                            </div>

                                            <div className="countdown-content">
                                                <p className="display-number">00</p>
                                                <p className="display-text">Sec</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>}
        </>
    )
}

export default ProductDetails