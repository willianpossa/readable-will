import API from '../config'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const handleGetCategories = (categories) => {
    return {
        type: GET_ALL_CATEGORIES,
        categories
    }
}

export const get_categories = _ => {
    return dispatch => {
        return API.get('/categories').then(({data, status}) => {
            if(status === 200) {
                dispatch(handleGetCategories(data.categories))
            }
        })
    }
}