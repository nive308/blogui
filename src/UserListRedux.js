import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class UserListRedux extends React.Component{
    render(){
        return(
            <div>
                 <h1>Listing users-{this.props.users.length}</h1>
                 {this.props.users.map(user=>{
                     return(
                         <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                     )
                 })}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}

export default  connect(mapStateToProps)(UserListRedux)