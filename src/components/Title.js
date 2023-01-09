import React from "react";
import { useSelector } from "react-redux";


const Title=()=>{
    const uygulamanınStatei=useSelector(state=>state)
    return(
        <div>
            <h1>TODO APP</h1>
            <p>Kayıtlı todo sayısı: {uygulamanınStatei.todosState.todos.length}</p>
        </div>
    )
}

export default Title