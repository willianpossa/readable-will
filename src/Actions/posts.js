import API from '../config'

import { 
    FETCHING_POSTS,
    UPDATE_VOTESCORE,
    GET_INITIAL_DATA,
    GET_POST_DETAIL,
    REMOVE_POST
} from "./ActionTypes";

// Actions Creators
const handleFetchPosts = _ => {
    return {
        type: FETCHING_POSTS,
    }
}

const handleGetInitialData = posts => {
    return {
        type: GET_INITIAL_DATA,
        posts
    }
}

const handleUpdateVoteScore = (post_id, score) => {
    return {
        type: UPDATE_VOTESCORE,
        post_id,
        score
    }
}

const handleGetPostDetail = (post) => {
    return {
        type: GET_POST_DETAIL,
        post
    }
}

const handleDeletePost = post => {
    return {
        type: REMOVE_POST,
        post
    }
}

// Actions Logic
export const fetch_posts = () => {
    return dispatch => {
        dispatch(handleFetchPosts())

        return API.get('/posts').then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleGetInitialData(data))
            }
        })
    }
}

export const get_post_detail = id => {
    return dispatch => {
        return API.get(`/posts/${id}`).then(({data, status}) => {
            if(status === 200) {
                dispatch(handleGetPostDetail(data))
            }
        })
    }
}

export const votePost = (option, id) => {
    return (dispatch) => {
        return API.post('/posts/' + id, { option }).then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleUpdateVoteScore(data.id, data.voteScore))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export const deletePost = (post_id) => {
    return (dispatch) => {
        return API.delete('/posts/' + post_id).then(({data, status}) => {
            if(status === 200) {
                dispatch(handleDeletePost(data))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}