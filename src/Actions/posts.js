import API from '../config'

import { 
    FETCHING_POSTS,
    UPDATE_VOTESCORE,
    GET_INITIAL_DATA,
    GET_POST_DETAIL
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

const handleUpdateVoteScore = (id, score) => {
    return {
        type: UPDATE_VOTESCORE,
        id,
        score
    }
}

const handleGetPostDetail = (post) => {
    return {
        type: GET_POST_DETAIL,
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

export const vote_post = (option, id) => {
    return (dispatch, getState) => {
        return API.post('/posts/' + id, { option }).then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleUpdateVoteScore(data.id, data.voteScore))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}