import{useState} from "react";


const App = () => {
  
  //use stateHook
  const [username, setUsername] = useState("Sarthak");

  const ChangeHandler = () =>{
    setUsername("Ankur")
    
  }
  console.log(username)

  return(
    <>
      <h1>Username</h1>

      <h2>{username}</h2>
      <button onClick={ChangeHandler}>ChangeName</button>
    </>
  )




  let n = 12
  let str = "hello World";
  let b = true
  let nu = null
  let un = undefined
  let arr = [<h1>Hey</h1>, 12, "Hello", true, null, undefined, "hiii"]

  let obj = {name: "Abhinav", age: 20}

  // Array of Object
  const profiles = [
    {name: "Abhinav",age:21},
    {name:"Ashish", age: 21}, 
    {name: "kamlesh", age: 19}] ;

  //Using Map function
  const updatedprofile = profiles.map((profile, index)=>{
    return(
      <li key={index}>
        <span>Name: {profile.name}</span>
        <span>Age: {profile.age}</span>
      </li>
    );
  });


//   return (
//     <>
//       <h1>Datatype</h1>
//       <h2>Number: {n} </h2>
//       <h2>String: {str} </h2>
//       <h2>Boolean: {b} </h2>
//       <h2>Null: {nu} </h2>
//       <h2>Undefined: {un} </h2>
//       <h2>Arr: {arr}</h2>
//       <h2>Obj: {obj.name} | {obj.age}</h2>
//     </>
//   )


//Call Array Of Object
return (
  <>
    <h1>Rendering Json</h1>
    <ol>{updatedprofile}</ol>
  </>
)
};

export default App
