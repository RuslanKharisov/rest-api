import './styles.css'
import React from 'react'
import { Container } from '@mui/material'
import SearchBar from '../../components/SearchBar'
import FilterPanel from '../../components/FilterPanel'
import ProductList from '../../components/ProductList/ProductList'


const Shop = () => {
    return (
        <div >
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
}

export default Shop
