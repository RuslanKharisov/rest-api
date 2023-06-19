import './styles.css'
import React, { useContext, useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import FilterPanel from '../../components/FilterPanel/FilterPanel'
import ProductList from '../../components/ProductList/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { fetchTypes, fetchMateriials, fetchProducts } from '../../http/deviceAPI'


const Shop = observer ( () => {
    const {type, material, product} = useContext(Context)

        
    useEffect(() => {
        fetchTypes().then(data => type.setTypes(data))
        fetchMateriials().then(data => material.setMaterials(data))
        fetchProducts().then(data => product.setProducts(data.rows))

    }, [])

    return (
        <div className='container'>
            <SearchBar />
            <div className="shop-wraper">
                <div className="filter-panel">
                    <FilterPanel />
                </div>
                <div className="products-list">
                    <ProductList />
                </div>
            </div>
        </div>
    )
});

export default Shop
