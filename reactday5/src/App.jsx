import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const[users, setusers] = useState([
    {name: "Sachin", age: 18},
    {name: "Avneesh", age: 19},
    {name: "Bhanu", age: 21},
  ])

 

 

  
  console.log(fullname);
  

  return (
    <>
    <Create/>

    <hr />
     <Read users={users} setusers={setusers}/>
    </>
  );
};

export default App
