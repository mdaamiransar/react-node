import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = ({ product }) => {
    // const { removeProduct } = useContext(ProductContext);
    const { dispatch } = useContext(ProductContext);

    console.log(product);

    return (

        <tr onClick={() => dispatch({ type: 'REMOVE_PRODUCT', id: product.id })}>
            {/* <tr onClick={() => removeProduct(product.id)}> */}
            <td>{product.id}</td>
            <td>{product.productId}</td>
            <td>{product.categoryId}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.creationDate}</td>
            <td>{product.status}</td>
        </tr>

    )
}

export default ProductDetails
