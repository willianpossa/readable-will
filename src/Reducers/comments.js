import {
    GET_ALL_COMMENTS,
    UPDATE_VOTESCORE_COMMENT
} from '../Actions/ActionTypes'

const defaultState = {
    comments: []
}

export default function comments(state = defaultState, action) {
    switch(action.type) {
        case GET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }

        case UPDATE_VOTESCORE_COMMENT:
            let { comments } = state

            comments = comments.map(comment => {
                if(comment.id === action.id) {
                    return {
                        ...comment,
                        voteScore: action.score
                    }
                }

                return comment
            })

            return {
                ...state,
                comments
            }

        default:
            return state
    }
}