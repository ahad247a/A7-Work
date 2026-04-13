import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiMenu, HiX } from "react-icons/hi"; 
import { MdOutlineTimeline } from "react-icons/md"; 
import { IoStatsChartOutline } from "react-icons/io5"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-[#2D5344] text-white" 
        : "text-slate-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center h-20">
          
         
          <div className="text-2xl font-bold flex items-center">
            <span className="text-slate-800">Keen</span>
            <span className="text-[#2D5344]">Keeper</span>
          </div>

         
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/" className={navLinkStyles}>
              <HiOutlineHome className="text-xl" />
              <span className="font-medium">Home</span>
            </NavLink>
            <NavLink to="/timeline" className={navLinkStyles}>
              <MdOutlineTimeline className="text-xl" />
              <span className="font-medium">Timeline</span>
            </NavLink>
            <NavLink to="/stats" className={navLinkStyles}>
              <IoStatsChartOutline className="text-xl" />
              <span className="font-medium">Stats</span>
            </NavLink>
          </div>

         
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-slate-800">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyles}>
            <HiOutlineHome className="text-xl" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/timeline" onClick={() => setIsOpen(false)} className={navLinkStyles}>
            <MdOutlineTimeline className="text-xl" />
            <span>Timeline</span>
          </NavLink>
          <NavLink to="/stats" onClick={() => setIsOpen(false)} className={navLinkStyles}>
            <IoStatsChartOutline className="text-xl" />
            <span>Stats</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;