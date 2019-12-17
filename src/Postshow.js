// import React from 'react'
// import axios from 'axios' // npm install --save axios
// import {Link} from 'react-router-dom'


// class Postshow extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             posts:{},
//             comments:[],
//             users:[]
//         }
//     }

// componentDidMount(){
//     const id=this.Props.match.params.id
//     axios.get(`https://jsonplacehlder.typicode.com/posts/${id}`)
//     .then((response)=>{
//     const posts =response.data
//     this.setState({posts})
    
//     axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//     .then((response)=>{
//         const post=response.data
//         this.setState({post})
//      })}


// axios.get(`https://jsonplaceholder.typicode.com/comments?postId=/${id}`)
//             .then((response)=>{
//             const comments=response.data
//             this.setState({comments})
//         })
    
//     }  

// render(){
//             return(
//                 <div>
//                     <h2>{this.state.post.title}</h2>
//                     <p>{this.state.post.body}</p>
//                     <p>{this.state.post.userId}</p>

//                     <h2>Listing comments-{this.state.comments.length}</h2>
//                     <ul>
//                         {this.state.comments.map(comment=>{
//                             return(
//                             <li key={comment.id}>{comment.body}</li>
//                             )
//                         })}
//                     </ul>
//                 </div>
//             )}


// }
//                     export default Postshow