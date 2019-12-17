import React from 'react'
import {connect} from 'react-redux'

class UserPostRedux extends React.Component{
    render(){
        console.log("posts",this.props.posts)
        return(
            <div>
                <h2>Posts written by user</h2>
            <ul>
                {this.props.posts.map(post=>{
                    return(
                    <li key={post.id}>{post.title}</li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts

    }
}

export default connect(mapStateToProps)(UserPostRedux)