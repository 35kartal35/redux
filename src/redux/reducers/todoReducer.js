import actionsTypes from "../actions/actionsTypes"

const initialTodosState={
    todos:[]
}

const todosReducer=(state=initialTodosState,action)=>{
    if(action.type === actionsTypes.TODO_EKLE){
        return{
            todos:[...state.todos,action.payload]
        }
    }

    if(action.type === actionsTypes.TODO_SIL){
        var geciciDizi=state.todos.filter(item => item.id !== action.payload)
        return{
            todos:geciciDizi
        }
    }

    if(action.type === actionsTypes.CHANGE_TODO_DONE){
        var geciciDizi=[]
        for(let i=0;i<state.todos.length;i++){
            if(state.todos[i].id === action.payload){
                var guncelTodo={
                    ...state.todos[i],
                    isDone:!state.todos[i].isDone
                }
                geciciDizi.push(guncelTodo)
            }else{
                geciciDizi.push(state.todos[i])
            }
        }
        return{
            todos:geciciDizi
        }
    }
    return state
}

export default todosReducer;