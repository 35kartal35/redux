import React from "react";
import actionsTypes from "../redux/actions/actionsTypes";
import { useSelector,useDispatch } from "react-redux";

const ListTodos = () => {
    const uygulamanınStatei = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(uygulamanınStatei);
    return (
        <div>
            {uygulamanınStatei.todosState.todos.length === 0 && (
                <p>Henüz Kayıtlı Bir Todo Yok</p>
            )}
            {uygulamanınStatei.todosState.todos.length > 0 && (
                <>
                {uygulamanınStatei.todosState.todos.map((todo) =>(
                    <div>
                        <h1 style={{textDecoration:todo.isDone === true ? "line-through":"none" }}>{todo.text}</h1>
                    
                     <div><button onClick={()=>dispatch({type:actionsTypes.TODO_SIL,payload:todo.id})}>sil</button>

                    <button onClick={()=>dispatch({type:actionsTypes.CHANGE_TODO_DONE,payload:todo.id})}>{todo.isDone === true ? "Yapılmadı" : "yapıldı"}</button> 
                    
                    <button>düzenle</button><hr /></div></div>
                ))}
                
                </>
            )}
        </div>
    );
};

export default ListTodos;
