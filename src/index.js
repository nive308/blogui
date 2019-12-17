import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import {startSetUsers} from './action/users'
import {startSetPosts} from './action/posts'
import {startGetTodos} from './action/todos'

// import { increment, decrement } from './action/count'

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())

store.dispatch(startSetUsers())
store.dispatch(startSetPosts())
store.dispatch(startGetTodos())


const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
