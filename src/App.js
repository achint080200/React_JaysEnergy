import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" w-screen sm:w-full h-screen font-[Mona Sans] text-black ">
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
   
  );
}

export default App;