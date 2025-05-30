// import { Fragment } from "react";
// import "./Read.css";


const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) =>{
    const filtertodo = todos.filter((todo)=> todo.id != id);
    settodos(filtertodo)
    // console.log("Delete Presed")
  }

  
  const rendertodos = todos.map((todo) => {
    return (<li key={todo.id} className=" mb-2 flex justify-between items-center p-4 bg-gray-900 rounded">
      <span className="text-xl font-thin">{todo.title}</span><button className="text-red-400 font-thin text-sm" onClick={() => DeleteHandler(todo.id)}>Delete</button></li>
    ); 
  })

  return (
    <div className="w-[40%]">
      < h1 className="text-5xl font-thin mb-10"><span className="text-pink-400">Pending</span> Todo</h1> 
      <ol>{rendertodos}</ol>
    </div>
  )
}

export default Read;
