import React from 'react'
import {connect} from 'react-redux'

class UserTodoRedux extends React.Component{
    render(){
        return(
        <div>
            <h2>Listing Todos-{this.props.todos.length}</h2>
            {this.props.todos.map(todo=>{
                return<li key={todo.id}>{todo.title}</li>
            })}
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    // console.log(state.todos)
    return{
        todos:state.todos
    }
}

export default connect(mapStateToProps)(UserTodoRedux)