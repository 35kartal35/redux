import React from "react";
import Title from "./components/Title";
import ListTodos from "./components/ListTodo";

import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <div>
      <Title/>
      <AddTodoForm/>
      <ListTodos/>
    </div>
  );
}

export default App;
