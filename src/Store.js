import { createStore } from 'redux'

import Reducers from './Reducers'
import Middlewares from './Middlewares'

const store = createStore(Reducers, Middlewares)

export default store