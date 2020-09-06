import axios from 'axios';

import { 
    GET_BOOKS,
    SET_LOADING,
    CLEAR_ERRORS,
} from './types';

export const getBooks = postData => {
    return async dispatch => {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${postData.txt}&orderBy:bestsellers&key=AIzaSyAYm6-RhkiIMO1AdsnMqI2l2DbN1w5hahc`);
        dispatch({
            type: GET_BOOKS,
            payload: res.data
        });
    };
};

export const setPostLoading = id => {
    return async dispatch => {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        dispatch({ 
            type: SET_LOADING,
            payload: res.data
        })
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};