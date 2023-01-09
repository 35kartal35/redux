const initialTodosState={
    todos:[]
}

const todosReducer=(state=initialTodosState,action)=>{
    if(action.type === "TODO_EKLE"){
        return{
            todos:[...state.todos,action.payload]
        }
    }
    return state
}

export default todosReducer;