import React from 'react';
import "./css/bootstrap.css"

import { connect } from 'react-redux'
// import { increment, decrement ,reset,random} from './action/count'


import {BrowserRouter,Route,Link} from 'react-router-dom'
import UserListRedux from './UserListRedux'
import UserPostRedux from './UserPostRedux'
import UserShowRedux from './UserShowRedux';
import UserTodoRedux from  './UserTodoRedux'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Redux</h1>
      <Link to="/Home">Home</Link>|

      <Link to="/users">Users</Link>|
      <Link to="/posts">Posts</Link>|
      <Link to="/Todos">Todos</Link>
      
      <Route path="/users" component={UserListRedux} exact={true}/>
      <Route path="/users/:id" component={UserShowRedux}/>
      <Route path="/posts" component={UserPostRedux}/>
      <Route path="/todos" component={UserTodoRedux}/>
     </div>
    </BrowserRouter>
  );
}




const mapStateToProps=(state)=>{
  return{
    users:state.users
  }
}
export default connect(mapStateToProps)(App);
