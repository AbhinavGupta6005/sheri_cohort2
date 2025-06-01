
import { nanoid } from "nanoid";
import {useForm} from "react-hook-form"

const Create = (props) => {

  const todos = props.todos;
  const settodos = props.settodos;

  const { register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm();


  // const [todos, settodos] = useState([
  //   { id: 1, title: "Kamm kr le bhai", isCompleted: false },
  // ]);

  const SubmitHandler = (data) => {
    // e.preventDefault();
      //title: title,
      data.isCompleted= false,
      data.id = nanoid();
      

      const copytodos = [...todos];
      copytodos.push(data);
      settodos(copytodos)

      reset();
    

    // let copytodos = [...todos];
    // copytodos.push(newtodo)
    // settodos(copytodos)

    // settitle("")

  }
  console.log(errors);

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
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          {...register("title", {required: "title can not be empty",})}
          className="p-2 border-b w-full text-2xl font-thin outline-0"
          type="text"
          placeholder="title" />
        {/* {errors && errors.title && errors.title.message &&<small>{errors.title.message}</small>} */}
        <small className="font-thin text-red-400">{errors?.title?.message}</small>
        <br /><br />

        <button className="text-xl px-10 py-2 border rounded">Create Todo</button>
      </form>
    </div>
  );
}

export default Create;