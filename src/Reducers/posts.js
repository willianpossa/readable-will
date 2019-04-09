import { 
    FETCHING_POSTS,
    UPDATE_VOTESCORE,
    GET_INITIAL_DATA,
    GET_POST_DETAIL
} from "../Actions/posts";

const defaultState = {
    posts: [],
    post: {},
    wait: false
}

export default function posts(state = defaultState, action) {
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
            let { posts, post } = state

            posts = posts.map(post => {
                if(post.id === action.id) {
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

        default:
            return state
    }
}