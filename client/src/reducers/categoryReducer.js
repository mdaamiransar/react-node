import React from 'react'
import uuid from 'uuid/v1'

export const categoryReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_CATEGORY':
            return [...state, {
                id: uuid(),
                categoryId: action.payload.categoryId,
                name: action.payload.name
            }];
        case 'REMOVE_CATEGORY':
            return state.filter(data => data.id !== action.payload);
        default:
            return state;
    }

}