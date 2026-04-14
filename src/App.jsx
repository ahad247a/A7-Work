import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      
      <div > 
        <Outlet /> 
        <Toaster position="top-center" reverseOrder={false} />  
      </div>
      <Footer /> 
    </div>
  )
}

export default App;