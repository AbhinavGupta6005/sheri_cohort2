import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {

  const todos = props.todos;
  const settodos = props.settodos;


  const [title, settitle] = useState("");

  // const [todos, settodos] = useState([
  //   { id: 1, title: "Kamm kr le bhai", isCompleted: false },
  // ]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    }

    let copytodos = [...todos];
    copytodos.push(newtodo)
    settodos(copytodos)

    settitle("")

  }

  const buttoncss = {
    // color: "white",
    padding: "5px 10px",
    backgroundColor: "transparent",
    border: "1px solid black",
    borderRadius: "5px"
  }




  return (
  <div className="w-[60%] p-10">
    <h1 className="text-5xl font-thin mb-10">Set <span className="text-red-400">Reminders</span> for
    <br />{" "} tasks</h1>
    <form onSubmit={SubmitHandler}>
      <input className="p-2 border-b w-full text-2xl font-thin outline-0" onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
        placeholder="title" />
      <br /><br />

      <button className="text-xl px-10 py-2 border rounded">Create Todo</button>
    </form>
  </div>
  );
}

export default Create;