import { useState } from "react";

const App = () => {

  const[todos, settodos] = useState([
    {id: 1, title:"Kamm kr le bhai", isCompleted: false},
  ]);

  const[title, settitle] = useState("");
  const [completed, setcompleted] = useState(false)
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("utter pradesh")

  return (
  <>
  <h1>Create Tasks</h1>
  <form action="">
    <input onChange={(e) => settitle(e.target.value)} value={title} type="text" placeholder="title"/>
    <br /><br />
    <input  checked={completed} onChange={(e) => setcompleted(e.target.checked)}  type="checkbox" />Completed
    <br /><br />
    <input onChange={(e)=> setgender(e.target.value)} value = "male" checked={gender == "male" && true} type="radio" />Male

    <input checked={gender == "female" && true} onChange={(e) => setgender(e.target.value)} value= "female" type="radio" />Female
    <br /><br />
    <select onChange={(e) => setcity(e.target.value)} value={city}>
      <option value="delhi">Delhi</option>
      <option value="utter pradesh">Utter Pradesh</option>
      <option value="kalkatta">Kolkata</option>
    </select>
    <br /><br />
    <button>Create Todo</button>
  </form>
  </>
  )
};

export default App;