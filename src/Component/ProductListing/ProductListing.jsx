import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../redux/actions/productActions'
import ProductComponent from '../ProductComponent/ProductComponent'
import "./ProductListing.css"
import { Heading } from '../Heading/Heading'

const ProductListing = () => {
    // const [loader, setLoader] = useState(false)
    // const [errorHandling, setErrorHandling] = useState(false)
    const products = useSelector((state) => state)
    const dispatch = useDispatch()



    useEffect(() => {
        const fetchProducts = async () => {
            // setLoader(true)
            const response = await axios.get("https://fakestoreapi.com/products")
                .catch((err) => {
                    console.log("err", err)
                    // setErrorHandling(true)
                })
            // setLoader(false)
            dispatch(setProducts(response.data))
        }
        fetchProducts()
    }, [dispatch])
 



    return (
       <>
        <Heading heading="Features Product" />  
        {
            products.length === 0 ?  <h1>Loading</h1> : <div className='product__listing__container'>
            <ProductComponent />
        </div>
        }
       </>
    )
}

export default ProductListing