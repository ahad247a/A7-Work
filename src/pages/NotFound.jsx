import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineHome } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 overflow-hidden relative">
      
      {/* ব্যাকগ্রাউন্ডে বড় ৪-০-৪ অ্যানিমেশন */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute text-[15rem] md:text-[25rem] font-bold text-[#2D5344] select-none z-0"
      >
        404
      </motion.div>

      <div className="relative z-10 text-center">
        {/* মেইন ইলাস্ট্রেশন বা আইকন */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-8xl mb-6 inline-block"
        >
          🔍
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
        >
          পৃষ্ঠাটি পাওয়া যায়নি
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 mb-8 max-w-sm mx-auto"
        >
          দুঃখিত, আপনি যে লিঙ্কটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে অথবা কোনো ভুল ইউআরএল ব্যবহার করছেন।
        </motion.p>

        {/* ব্যাক টু হোম বাটন */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-[#2D5344] text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-[#2d534440] hover:-translate-y-1 transition-all"
          >
            <HiOutlineHome className="text-xl" />
            হোম পেজে ফিরে যান
          </Link>
        </motion.div>
      </div>

      {/* নিচের ডেকোরেশন */}
      <div className="absolute bottom-10 text-gray-400 text-sm font-medium">
        KeenKeeper — Your Relationship Manager
      </div>
    </div>
  );
};

export default NotFound;