import {$authHost, $host} from './index'

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createMateriial = async (type) => {
    const {data} = await $authHost.post('api/material', type)
    return data
}

export const fetchMateriials = async () => {
    const {data} = await $host.get('api/material')
    return data
}

export const createProduct = async (type) => {
    const {data} = await $authHost.post('api/product', type)
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/product')
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}
