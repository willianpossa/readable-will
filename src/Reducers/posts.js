import { 
    FETCHING_POSTS,
    UPDATE_VOTESCORE,
    GET_INITIAL_DATA,
    GET_POST_DETAIL,
    REMOVE_POST
} from "../Actions/ActionTypes";

const defaultState = {
    posts: [],
    post: {},
    wait: false
}

export default function posts(state = defaultState, action) {
    let { posts, post } = state

    switch(action.type) {

        case FETCHING_POSTS:
            return {
                ...state,
                wait: true
            }

        case GET_INITIAL_DATA:
            return {
                ...state,
                wait: false,
                posts: action.posts
            }
        
        case UPDATE_VOTESCORE:
            posts = posts.map(post => {
                if(post.id === action.post_id) {
                    return {
                        ...post,
                        voteScore: action.score
                    }
                }

                return post
            })

            if(post) {
                post = {
                    ...post,
                    voteScore: action.score
                }
            }

            return {
                ...state,
                posts,
                post
            }
        
        case GET_POST_DETAIL:
            return {
                ...state,
                post: action.post
            }

        case REMOVE_POST: 
            posts = posts.map(post => {
                if(post.id === action.post.id) {
                    return {
                        ...action.post
                    }
                }

                return post
            })

            posts = posts.filter(post => post.deleted === false)

            return {
                ...state,
                posts
            }

        default:
            return state
    }
}