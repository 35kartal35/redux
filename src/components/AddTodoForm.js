import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
    const [text, setText] = useState("");
    const dispatch=useDispatch()
    const handleSubmit=(event)=>{
        event.preventDefault()
        const newTodo={
            id:String(new Date().getTime()),
            text:text,
            isDone:false,
            date:new Date()
        }
        dispatch({type:"TODO_EKLE",payload:newTodo})
        setText("")
    }


    return(
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(event) => setText(event.target.value)}/>
            <button type="submit">Ekle</button>
        </form>
    );
};

export default AddTodoForm;