import API from '../config'

import {
    GET_ALL_COMMENTS,
    UPDATE_VOTESCORE_COMMENT
} from './ActionTypes'

// actions creators
const handleGetComments = (comments) => {
    return {
        type: GET_ALL_COMMENTS,
        comments
    }
}

export const getComments = (post_id) => {
    return dispatch => {
        return API.get(`/posts/${post_id}/comments`).then(({status, data}) => {
            if(status === 200) {
                dispatch(handleGetComments(data))
            }
        })
    }
}