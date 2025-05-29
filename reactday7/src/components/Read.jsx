import { Fragment } from "react";
import "./Read.css";


const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) =>{
    const filtertodo = todos.filter((todo)=> todo.id != id);
    settodos(filtertodo)
    // console.log("Delete Presed")
  }

  
  const rendertodos = todos.map((todo) => {
    return (<li key={todo.id}>
      {todo.title} |{" "} <span onClick={() => DeleteHandler(todo.id)}>Delete</span></li>
    ); 
  })

  return (
    <Fragment>
      < h1 class="read_list_heading">Pending Todo</h1> 
      <ol>{rendertodos}</ol>
    </Fragment>
  )
}

export default Read;
