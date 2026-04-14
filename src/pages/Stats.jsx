import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Stats = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateStats = async () => {
      // ১. টাইমলাইনের সব ডেটা নিয়ে আসা (JSON + LocalStorage)
      let allActivities = [];
      
      try {
        const res = await fetch("/activities.json");
        const jsonData = await res.json();
        allActivities = [...jsonData];
      } catch (err) {
        console.log("No initial activities found");
      }

      const localData = JSON.parse(localStorage.getItem("timelineData")) || [];
      allActivities = [...localData, ...allActivities];

      // ২. টাইপ অনুযায়ী ক্যালকুলেট করা (Call, Text, Video)
      const counts = allActivities.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
      }, {});

      // ৩. চার্টের জন্য ডেটা ফরম্যাট করা
      const finalData = [
        { name: "Text", value: counts["Text"] || 0, color: "#8B5CF6" }, // Purple
        { name: "Call", value: counts["Call"] || 0, color: "#2D5344" }, // Dark Green
        { name: "Video", value: counts["Video"] || 0, color: "#34D399" }, // Light Green
      ];

      setChartData(finalData);
      setLoading(false);
    };

    calculateStats();
  }, []);

  if (loading) return <div className="text-center py-20 font-bold">Loading Stats...</div>;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E293B] mb-8">Friendship Analytics</h1>

        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-[#2D5344] font-bold mb-10 text-lg">By Interaction Type</h3>
          
          <div className="h-87.5 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}  /* ডোনাট শেপ */
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                />
                <Legend 
                  iconType="circle" 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ paddingTop: "20px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;