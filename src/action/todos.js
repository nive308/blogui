import axios from 'axios'

export const setTodos=(todos)=>{
    return{
        type:"SET_TODOS",
        payload:todos
    }
}

export const resetTodos=()=>{
    return{
        type:"RESET_TODOS"
    }
}

export const startGetTodos=()=>{
    return (dispatch)=>{
        axios.get(`http://jsonplaceholder.typicode.com/todos`)
        .then(response=>{
            const todos=response.data
            dispatch(setTodos(todos))
        })
  }
}