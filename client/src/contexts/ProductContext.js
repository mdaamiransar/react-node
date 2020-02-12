import React, { createContext, useState, useReducer } from 'react'
//import uuid from 'uuid/v1'
import { productReducer } from '../reducers/productReducer';

export const ProductContext = createContext();

const ProductContextProvider = props => {

    const [products, dispatch] = useReducer(productReducer, []);

    // const [products, setProducts] = useState([
    //     { categoryId: 'shirt', name: 'shirt', price: '230', creationDate: '22/07/2020', status: 'false', id: 1 },
    //     { categoryId: 'shirt', name: 'jeans', price: '239', creationDate: '20/07/2019', status: 'true', id: 2 }
    // ]);

    // const addProduct = (categoryId, name, price, description, creationDate, status) => {
    //     setProducts([...products, { categoryId, name, price, description, creationDate, status, id: uuid() }])
    // }

    // const removeProduct = (id) => {
    //     setProducts(products.filter(product => product.id !== id));
    // }

    return (
        // <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
        <ProductContext.Provider value={{ products, dispatch }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
