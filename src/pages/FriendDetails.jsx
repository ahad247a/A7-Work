import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiOutlinePhone, HiOutlineMail, HiOutlineVideoCamera, HiOutlineChatAlt2, HiOutlineClock, HiOutlineArchive, HiOutlineTrash } from "react-icons/hi";

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-50"
            />
            <h2 className="text-2xl font-bold text-[#1E293B]">{friend.name}</h2>
            <div className="flex justify-center gap-2 mt-2 mb-4">
              <span className="bg-red-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold">{friend.status}</span>
              <span className="bg-green-100 text-[#2D5344] text-[10px] px-3 py-1 rounded-full uppercase font-bold">{friend.tags[0]}</span>
            </div>
            <p className="text-gray-500 italic text-sm mb-2">"{friend.bio}"</p>
            <p className="text-gray-400 text-xs">Preferred: {friend.email}</p>
          </div>

          
          <div className="space-y-3">
            <button className="w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-center gap-3 text-slate-700 hover:bg-gray-50 transition-all font-medium">
              <HiOutlineClock className="text-xl" /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-center gap-3 text-slate-700 hover:bg-gray-50 transition-all font-medium">
              <HiOutlineArchive className="text-xl" /> Archive
            </button>
            <button className="w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-center gap-3 text-red-500 hover:bg-red-50 transition-all font-medium">
              <HiOutlineTrash className="text-xl" /> Delete
            </button>
          </div>
        </div>

        
        <div className="lg:col-span-8 space-y-6">
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#1E293B]">{friend.days_since_contact}</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#1E293B]">{friend.goal}</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-xl font-bold text-[#2D5344]">{friend.next_due_date}</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[#1E293B] mb-1">Relationship Goal</h4>
              <p className="text-gray-500 text-sm">Connect every <span className="font-bold text-black">{friend.goal} days</span></p>
            </div>
            <button className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-100">Edit</button>
          </div>

          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-[#1E293B] mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-gray-50 p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100 transition-all">
                <HiOutlinePhone className="text-2xl text-slate-700" />
                <span className="text-sm font-medium">Call</span>
              </button>
              <button className="bg-gray-50 p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100 transition-all">
                <HiOutlineChatAlt2 className="text-2xl text-slate-700" />
                <span className="text-sm font-medium">Text</span>
              </button>
              <button className="bg-gray-50 p-6 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100 transition-all">
                <HiOutlineVideoCamera className="text-2xl text-slate-700" />
                <span className="text-sm font-medium">Video</span>
              </button>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-[#1E293B]">Recent Interactions</h4>
              <button className="text-xs font-bold text-gray-500 flex items-center gap-1 border border-gray-200 px-3 py-1 rounded hover:bg-gray-50">
                <HiOutlineClock /> Full History
              </button>
            </div>
           
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg"><HiOutlineChatAlt2 className="text-xl text-slate-600" /></div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">Text</p>
                      <p className="text-xs text-gray-400">Asked for career advice</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Jan 28, 2026</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;