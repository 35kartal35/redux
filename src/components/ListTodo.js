import React from "react";

import { useSelector } from "react-redux";

const ListTodos = () => {
    const uygulamanınStatei = useSelector((state) => state);
    console.log(uygulamanınStatei);
    return (
        <div>
            {uygulamanınStatei.todosState.todos.length === 0 && (
                <p>Henüz Kayıtlı Bir Todo Yok</p>
            )}
            {uygulamanınStatei.todosState.todos.length > 0 && (
                <>
                {uygulamanınStatei.todosState.todos.map((todo) =>(
                    <h1>{todo.text} <button>sil</button>
                    <button>düzenle</button> 
                    <button>done</button></h1> 
                ))}
                
                </>
            )}
        </div>
    );
};

export default ListTodos;
