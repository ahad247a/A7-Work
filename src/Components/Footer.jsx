import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D5344] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        
        <h2 className="text-5xl font-bold mb-6 tracking-tight">KeenKeeper</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        
        <div className="mb-12">
          <p className="text-sm font-semibold mb-6 uppercase tracking-widest">Social Links</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-white p-3 rounded-full text-[#2D5344] hover:bg-gray-200 transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-white p-3 rounded-full text-[#2D5344] hover:bg-gray-200 transition-all">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white p-3 rounded-full text-[#2D5344] hover:bg-gray-200 transition-all">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

       
        <div className="border-t border-gray-600/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;