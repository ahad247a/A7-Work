import { useEffect, useState } from "react";
import { HiOutlinePhone, HiOutlineVideoCamera, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // ১. কোনো fetch করার দরকার নেই। 
    // ২. সরাসরি friends.json থেকে অথবা LocalStorage থেকে ডেটা নিন।
    const loadData = async () => {
      try {
        const res = await fetch("/friends.json"); // friends.json ঠিক থাকলে এটি কাজ করবে
        const friendsData = await res.json();
        
        // প্রাথমিক ডেটা সেট করা
        const initialData = friendsData.map(f => ({
          id: f.id,
          type: "Meetup", 
          person: f.name,
          date: "April 12, 2026"
        }));

        // LocalStorage থেকে ডেটা আনা
        const localData = JSON.parse(localStorage.getItem("timelineData")) || [];
        
        setActivities([...localData, ...initialData]);
      } catch (error) {
        // যদি friends.json লোড করতেও সমস্যা হয়, তবে শুধু LocalStorage দেখাবে
        const localData = JSON.parse(localStorage.getItem("timelineData")) || [];
        setActivities(localData);
      }
    };

    loadData();
  }, []);

  // আইকন এবং ফিল্টার লজিক আগের মতোই থাকবে...
  const getIcon = (type) => {
    switch (type) {
      case "Meetup": return <FaHandshake className="text-yellow-500" />;
      case "Text": return <HiOutlineChatAlt2 className="text-gray-400" />;
      case "Call": return <HiOutlinePhone className="text-gray-600" />;
      case "Video": return <HiOutlineVideoCamera className="text-gray-500" />;
      default: return <HiOutlineChatAlt2 className="text-gray-400" />;
    }
  };

  const filteredActivities = activities.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E293B] mb-6 tracking-tight">Timeline</h1>
        
       
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-gray-200 text-gray-500 text-sm rounded-lg px-4 py-2 mb-8 outline-none"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Calls</option>
          <option value="Text">Messages</option>
          <option value="Video">Videos</option>
          <option value="Meetup">Meetups</option>
        </select>

        <div className="space-y-3">
          {filteredActivities.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
              <div className="text-2xl p-2 bg-gray-50 rounded-lg">{getIcon(item.type)}</div>
              <div>
                <p className="text-[#1E293B] font-medium"><span className="font-bold">{item.type}</span> with {item.person}</p>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;