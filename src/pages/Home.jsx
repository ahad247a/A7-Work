import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
   
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  
  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    if (s === "overdue") return "bg-red-500";
    if (s === "almost due") return "bg-orange-400";
    if (s === "on-track") return "bg-[#2D5344]";
    return "bg-gray-500";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl font-bold text-[#2D5344]">
        Loading Friends...
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      
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

      
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">{friends.length}</h2>
            <p className="text-slate-500 font-medium">Total Friends</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">
              {friends.filter(f => f.status.toLowerCase() === 'on-track').length}
            </h2>
            <p className="text-slate-500 font-medium">On Track</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">
              {friends.filter(f => f.status.toLowerCase() === 'almost due').length}
            </h2>
            <p className="text-slate-500 font-medium">Need Attention</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-[#2D5344] mb-2">12</h2>
            <p className="text-slate-500 font-medium">Interactions This Month</p>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-2xl font-bold mb-8 text-[#1E293B]">Your Friends</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map((friend) => (
            <div 
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center cursor-pointer hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <img 
                src={friend.picture} 
                alt={friend.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-100"
              />
              <h3 className="text-lg font-bold text-[#1E293B]">{friend.name}</h3>
              <p className="text-gray-400 text-xs mb-3">{friend.days_since_contact}d ago</p>
              
              
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="bg-green-50 text-[#2D5344] text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              
              <div className={`${getStatusColor(friend.status)} text-white text-[10px] py-1.5 rounded-md uppercase font-bold tracking-wider`}>
                {friend.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;