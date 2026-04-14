import { useEffect, useState } from "react";
import { HiOutlinePhone, HiOutlineVideoCamera, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Filter timeline");

  useEffect(() => {
    // ১. প্রথমে static activities.json থেকে ডেটা আনা
    fetch("/activities.json")
      .then((res) => res.json())
      .then((jsonData) => {
        // ২. তারপর LocalStorage থেকে ইউজার জেনারেটেড ডেটা আনা
        const localData = JSON.parse(localStorage.getItem("timelineData")) || [];
        
        // ৩. দুই ধরণের ডেটাকে একসাথে করা (নতুন ডেটাগুলো সবার ওপরে থাকবে)
        const combinedData = [...localData, ...jsonData];
        setActivities(combinedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching timeline:", err);
        // যদি JSON ফাইল না থাকে তবে শুধু LocalStorage এর ডেটা দেখাবে
        const localData = JSON.parse(localStorage.getItem("timelineData")) || [];
        setActivities(localData);
        setLoading(false);
      });
  }, []);

  // আইকন রিটার্ন করার ফাংশন
  const getIcon = (type) => {
    switch (type) {
      case "Meetup": return <FaHandshake className="text-yellow-500" />;
      case "Text": return <HiOutlineChatAlt2 className="text-gray-400" />;
      case "Call": return <HiOutlinePhone className="text-gray-600" />;
      case "Video": return <HiOutlineVideoCamera className="text-gray-500" />;
      default: return <HiOutlineChatAlt2 className="text-gray-400" />;
    }
  };

  // ফিল্টার লজিক
  const filteredActivities = activities.filter((item) => {
    if (filter === "Filter timeline" || filter === "All") return true;
    return item.type === filter;
  });

  if (loading) return <div className="text-center py-20 font-bold text-[#2D5344]">Loading Timeline...</div>;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E293B] mb-6">Timeline</h1>

        {/* ফিল্টার ড্রপডাউন */}
        <div className="mb-8">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-gray-200 text-gray-500 text-sm rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-[#2D5344] cursor-pointer"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Calls</option>
            <option value="Text">Messages</option>
            <option value="Video">Videos</option>
            <option value="Meetup">Meetups</option>
          </select>
        </div>

        {/* টাইমলাইন লিস্ট */}
        <div className="space-y-3">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                {/* আইকন সেকশন */}
                <div className="text-2xl p-2 bg-gray-50 rounded-lg">
                  {getIcon(item.type)}
                </div>

                {/* টেক্সট সেকশন */}
                <div>
                  <p className="text-[#1E293B] font-medium">
                    <span className="font-bold">{item.type}</span> with {item.person}
                  </p>
                  <p className="text-gray-400 text-xs">{item.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400">
              No interactions found for this filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;