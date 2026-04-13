import { HiPlus } from "react-icons/hi";

const Home = () => {
  return (
    <div className="bg-[#F8FAFC] pb-12">
      
      <div className="max-w-4xl mx-auto text-center pt-16 pb-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>
        
        
        <button className="bg-[#2D5344] text-white px-6 py-3 rounded-md flex items-center gap-2 mx-auto hover:bg-[#234135] transition-all">
          <HiPlus className="text-xl" />
          <span className="font-medium">Add a Friend</span>
        </button>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">10</h2>
            <p className="text-slate-500 font-medium">Total Friends</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">3</h2>
            <p className="text-slate-500 font-medium">On Track</p>
          </div>

          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">6</h2>
            <p className="text-slate-500 font-medium">Need Attention</p>
          </div>

        
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">12</h2>
            <p className="text-slate-500 font-medium">Interactions This Month</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;