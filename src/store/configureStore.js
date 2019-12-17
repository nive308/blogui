import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 

import countReducer from '../reducers/count'
import usersReducer from '../reducers/users'
import postsReducer from '../reducers/posts'
import todosReducer from '../reducers/todos'


const configureStore = () => {
const store = createStore(combineReducers({
    count: countReducer,
    users: usersReducer,
    posts: postsReducer,
    todos: todosReducer
     }),applyMiddleware(thunk))
        return store
    }
 export default configureStore
