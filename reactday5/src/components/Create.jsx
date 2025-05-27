
import { useState } from "react"; 
const Create = (props) => {

    console.log(props)
     const[fullname, setfullname] = useState("");
     const[age, setage] = useState(18);

    const SubmitHandler = (e) => {
    e.preventDefault();
    const newuser = {fullname, age}
    console.log(newuser)  //api  -backend  -database
    }


    return (
        <div>
            <h1>Register Users</h1>
            <form onSubmit={SubmitHandler}>
                <input onChange={(e) => setfullname(e.target.value)}
                    value={fullname} type="text " placeholder="Enter NAme" />

                <input onChange={(e) => setage(e.target.value)}
                    value={age} type="number" placeholder="Age" />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create