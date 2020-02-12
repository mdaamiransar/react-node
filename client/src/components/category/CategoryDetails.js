import React, { useContext } from 'react'
import { CategoryContext } from '../../contexts/CategoryContext';

const CategoryDetails = ({ category }) => {
    const { dispatch } = useContext(CategoryContext);

    console.log(category);

    return (
        <tr onClick={() => dispatch({ type: 'REMOVE_CATEGORY', payload: category.id })}>
            <td>{category.id}</td>
            <td>{category.categoryId}</td>
            <td>{category.name}</td>
        </tr>
    )
}

export default CategoryDetails;
