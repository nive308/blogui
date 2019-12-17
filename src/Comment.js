import React from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'

class Comments extends React.Component{
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }

componentDidMount(){
    axios.get(`http://jsonplaceholder.typicode.com/comments/`)
        .then((response)=>{
            const comments=response.data
            this.setState({comments})
        })
    }
    render(){
        return(
            <div>
                <h2>Listing comments-{this.state.comments.length}</h2>
                {
                    this.state.comments.map((comment)=>{
                        return(
                            <div key={comment.id}>
                            {/* <h2>Title-{comment.title}</h2> */}
                            <h5>Body-{comment.body}</h5>
                            <hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
} 
export default Comments
