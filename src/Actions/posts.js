import API from '../config'

// Actions types
export const FETCHING_POSTS = 'FETCHING_POSTS'
export const GET_OR_UPDATE_POSTS = 'GET_OR_UPDATE_POSTS'

// Actions Creators
export const handleFetchPosts = _ => {
    return {
        type: FETCHING_POSTS,
    }
}

export const handleGetOrUpdatePosts = posts => {
    return {
        type: GET_OR_UPDATE_POSTS,
        posts
    }
}

// Actions Logic
export const fetch_posts = () => {
    return dispatch => {
        dispatch(handleFetchPosts())

        return API.get('/posts').then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleGetOrUpdatePosts(data))
            }
        })
    }
}

export const vote_post = (option, id) => {
    return (dispatch, getState) => {
        const posts = getState().Posts.data

        const newPosts = posts.map(post => {
            if(post.id === id) {
                post.voteScore = option === 'upVote' ? (post.voteScore + 1) : (post.voteScore - 1)
                
                return post
            } else {
                return post
            }
        })

        return API.post('/posts/' + id, { option }).then(({ data, status }) => {
            if(status === 200) {
                dispatch(handleGetOrUpdatePosts(newPosts))  
            } else {
                dispatch(handleGetOrUpdatePosts(posts))
            }
        }).catch(error => {
            dispatch(handleGetOrUpdatePosts(posts))

            console.log(error)
        })
    }
}

export const delete_post = id => {
    return (dispatch, getState) => {
        const posts = getState().Posts.data

        return API.delete('/posts/' + id).then(({data, status}) => {
            if(status === 200 && data.deleted) {
                const newPosts = posts.filter(post => post.id !== id)

                dispatch(handleGetOrUpdatePosts(newPosts))
            }
        })
    }
}