import React from 'react'
import "./ProductComponent.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        const imgT=image
        return (
            <Link to={`/product/${id}`} className = "link" key={id}>
                <div className='product__main' >
                    <div className='product__main__image'>
                        <img src = {imgT} alt='product' className='product__main__image-img' />
                    </div>
                    <div className='product__main__detail' >
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
            {products.length === 0 ? <h1>Loading the products...</h1> : renderList }

        </>
    )
}
export default ProductComponent