import { combineReducers } from 'redux'

import Categories from './categories'
import Posts from './posts'
import Comments from './comments'

const RootReducer = combineReducers({
    Posts,
    Categories,
    Comments
})

export default RootReducer