const App = () => {

  const handleclick = () =>{
    alert("Buton clicked");
  }

  const handleParamclick = (msg) =>{
    alert(msg);
  }

  const wrapperhandler = () =>{
    handleParamclick('Raat Anderi hai Diye bhuj gye');
  }
  
  return (
    <>
    <h1>{2+3}</h1>
      <div>App</div>
      <div>hello</div>
      <button onclick={handleclick}>click</button>
      <button onclick={wrapperhandler}>click Para</button>
    </>
);


};

export default App


//Function call is  replaced by it's return value

// A Function component will always return HTML


// we can not write anything after return
// we can only return single data/entity/variable/value
// there must be single return in a function and that must be the last statement