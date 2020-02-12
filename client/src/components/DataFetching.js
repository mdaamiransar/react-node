import React, { useState, useEffect } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const mReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }

        default:
            return state;
    }
}
const DataFetching = () => {

    const [state, dispatch] = useReducer(mReducer, initialState);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                // setLoading(false);
                // setPost(response.data)
                // setError('')
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
                // setLoading(false)
                // setPost({})
                // setError('Something went wrong')
            })
    }, []);

    return (
        <div>

        </div>
    )
}

export default DataFetching
