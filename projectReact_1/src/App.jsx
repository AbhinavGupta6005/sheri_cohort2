import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div className="py-10 px-30 w-screen h-screen text-white font-thin bg-gray-800">

      <Navbar/>
      <Mainroutes/>
    </div>
  );
};


export default App;