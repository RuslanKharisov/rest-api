import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../index'
import ProductItem from './ProductItem/ProductItem'
import './styles.css'

const ProductList = observer(() => {
    const { product } = useContext(Context)
    

    return (
        <div className='product-list'>
                {product.products.map(product => (                    
                    <ProductItem key={product.id} product={product} />
                ))}
        </div>
    )
})

export default ProductList