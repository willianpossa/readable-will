import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const Middlewares = applyMiddleware(
    thunk
)

export default Middlewares