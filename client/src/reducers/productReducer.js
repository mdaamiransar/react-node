import React, { useReducer, useEffect } from 'react'
import uuid from 'uuid/v1'

export const productReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            //add product to database
            return [...state, {
                id: uuid(),
                productId: action.product.productId,
                categoryId: action.product.categoryId,
                name: action.product.name,
                price: action.product.price,
                description: action.product.description,
                creationDate: action.product.creationDate,
                status: action.product.status
            }];
        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.id);
        default:
            return state;
    }


}