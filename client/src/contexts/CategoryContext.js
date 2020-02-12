import React, { createContext, useReducer } from 'react'
import { categoryReducer } from '../reducers/categoryReducer';

export const CategoryContext = createContext();

const CategoryContextProvider = props => {

    const [categories, dispatch] = useReducer(categoryReducer, []);

    return (

        <CategoryContext.Provider value={{ categories, dispatch }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;
