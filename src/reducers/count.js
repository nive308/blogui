const countInitialState = 0
const countReducer = (state = countInitialState, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            return state + 1
        }
        case 'DECREMENT':{
            return state-1
        }
        case 'RESET':{
            state=0
            return state
        }
        case 'RANDOM':{
             return action.payload
        }
        default : {
            return state
        }
    }
}
export default countReducer
