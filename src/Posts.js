import React from 'react'
import axios from 'axios'

class PostsList extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }

componentDidMount(){
    const id=this.props.match.params.id
    axios.get(`http://jsonplaceholder.typicode.com/posts/`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
    }
    render(){
        return(
            <div>
                <h2>Listing posts-{this.state.posts.length}</h2>
                <table className="table table-striped">

                {
                    this.state.posts.map((post)=>{
                        return(
                            <div key={post.id}>
                            <h2>Title-{post.title}</h2>
                            <p>Body-{post.body}</p>
                            <hr/>
                            </div>
                        )
                    })
                }
                </table>
            </div>
        )
    }
} 
export default PostsList
