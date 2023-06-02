import './styles.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECT_ROUTE } from "../../../utils/consts";

const ProductItem = ({ product }) => {
    const navigate = useNavigate()
    return (        
            <div className="product-item__wrapper">
                <div onClick={() => navigate(PROJECT_ROUTE + '/' + product.id) } className="product-item">
                    <div className="product-item__img-wrapper">
                        <img src={product.img} alt="image" />
                    </div>
                    <div className="product-item__sku">{product.sku}</div>
                    <div className="product-item__title">{product.title}</div>
                    <div className="product-item__data">
                        <div className="product-item__price">{product.price}</div>
                        <div className="product-item__area">{product.area} кв.м.</div>
                    </div>
                </div>
            </div>
    )
}

export default ProductItem