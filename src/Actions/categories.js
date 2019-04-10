import API from '../config'

import {
    GET_ALL_CATEGORIES
} from './ActionTypes'

const handleGetCategories = (categories) => {
    return {
        type: GET_ALL_CATEGORIES,
        categories
    }
}

export const get_categories = _ => {
    return dispatch => {
        return API.get(`/categories`).then(({data, status}) => {
            if(status === 200) {
                dispatch(handleGetCategories(data.categories))
            }
        })
    }
}