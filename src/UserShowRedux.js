import React from 'react'
import {connect} from 'react-redux'
import "./css/bootstrap.css"

import {startGetTodos,resetTodos} from './action/todos'

class UserShowRedux extends React.Component{
    componentDidMount(){
        this.props.dispatch(startGetTodos(this.props.user.id))
         }
       componentWillMount(){
              console.log('remove component')
              this.props.dispatch(resetTodos())
       }
    render(){
        return(
        <div>
            <h2>User show</h2>
            {this.props.user&& <p>{this.props.user.name}-{this.props.user.email}</p>}
             <div class="row">
             <div class="col-md-12">
             <table className="table table-striped">
            <h2>Posts -{this.props.posts.length}</h2>
            <ul>
                {this.props.posts.map(post=>{
                    return(
                    <li key={post.id}>{post.title}</li>
                    )
                })}
            </ul>
            </table>
              <h2>Listing todos-{this.props.todos.length}</h2>
            {this.props.todos.map(todo=>{
                return(
                    <li key={todo.id}>{todo.title}</li>
                )
            })}
            </div>
            </div>
        </div>
        )
    }

}

const mapStateToProps=(state,props)=>{
    // console.log("posts",posts)
    return{
        user:state.users.find(user=>user.id==props.match.params.id),
        posts:state.posts.filter(post=>post.userId==props.match.params.id),
        todos:state.todos.filter(todo=>todo.userId==props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShowRedux)