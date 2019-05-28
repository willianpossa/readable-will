import API from '../config'

import {
    GET_ALL_COMMENTS,
    UPDATE_VOTESCORE_COMMENT,
    REMOVE_COMMENT,
    ADD_COMMENT,
    CHANGE_EDIT_COMMENT,
    EDIT_COMMENT,
    EMPTY_COMMENT
} from './ActionTypes'

// actions creators
const handleGetComments = (comments) => {
    return {
        type: GET_ALL_COMMENTS,
        comments
    }
}

const handleUpdateVoteScoreComment = (comment_id, score) => {
    return {
        type: UPDATE_VOTESCORE_COMMENT,
        comment_id,
        score
    }
}

const handleRemoveComment = (comment) => {
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

const handleAddComment = comment => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const handleEditComment = comment => {
    return {
        type: EDIT_COMMENT,
        comment
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

export const updateVoteScore = (option, comment_id) => {
    return dispatch => {
        return API.post('/comments/' + comment_id, { option }).then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleUpdateVoteScoreComment(data.id, data.voteScore))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export const removeComment = (comment_id) => {
    return dispatch => {
        return API.delete('/comments/' + comment_id).then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleRemoveComment(data))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export const addComment = (comment) => {
    return dispatch => {
        return API.post('/comments/', comment).then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleAddComment(data))
            }
        }).catch(error => {
            console.log(error)
        })
    }   
}

export const editComment = (comment_id, comment) => {
    return dispatch => {
        return API.put('/comments/' + comment_id, comment).then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleEditComment(data))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export const emptyComment = _ => {
    return {
        type: EMPTY_COMMENT
    }
}

export const changeEditComment = (comment) => {
    return {
        type: CHANGE_EDIT_COMMENT,
        comment
    }
}