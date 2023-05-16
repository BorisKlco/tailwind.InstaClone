import { BiHeart, BiSearchAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen lg:w-1/5 md:w-1/4 w-1/3 px-4 flex flex-col 
    bg-gray-900 text-white shadow-lg
    border-r-2 border-solid border-slate-600"
    >
      <h2 className="mb-8 mt-8 pl-8 text-2xl text-left">InstaClone</h2>

      <SideBarIcon icon={<HiOutlineHome size="32px" />} text="Something" />
      <SideBarIcon icon={<BiSearchAlt size="32px" />} text="Something" />
      <SideBarIcon icon={<FiSend size="32px" />} text="Something" />
      <SideBarIcon icon={<BiHeart size="32px" />} text="Something" />
    </div>
  );
};

interface SidebarIconProps {
  icon: any;
  text: string;
}

const SideBarIcon: React.FC<SidebarIconProps> = ({ icon, text }) => (
  <div className="sidebar-icon">
    {icon}
    <p className="lg:scale-100 md:scale-100 scale-0">{text}</p>
  </div>
);

export default SideBar;
