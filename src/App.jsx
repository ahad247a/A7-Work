import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      
      <div > 
        <Outlet /> 
        <Toaster position="top-center" reverseOrder={false} /> 
      </div>
    </div>
  )
}

export default App;