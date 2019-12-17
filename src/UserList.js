import React from 'react'
import axios from 'axios' // npm install --save axios
import {Link} from 'react-router-dom'

import "./css/bootstrap.css"

class UserList extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users/')
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            alert(err)
        }) 
    }

    render(){
        return(
            <div>
                <ul>
            <h2>Listing users-{this.state.users.length}</h2>
            <div className="container">
             <div class="row">
             <div class="col-md-12">
             <table className="table table-striped">

            {this.state.users.map((user)=>{
                return<li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            })}
            </table>
            </div>
            </div>
            </div>
                </ul>
                </div>
        )
    }
}
export default UserList