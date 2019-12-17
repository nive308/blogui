const todosInitialState=[]

const todosReducer =  (state=todosInitialState,action)=>{
    switch(action.type){
        case 'SET_TODOS':{
            return [...action.payload]
        }
        case 'RESET_TODOS':{
            return []
        }
        default:{
            return[...state]
        }
    }
}

export default todosReducer