import { TbYoga } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full lg:px-14 px-5 py-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl">ZenPose</h1>
        <span className="text-2xl">
          <TbYoga />
        </span>
      </div>
      <div className="md:flex items-center gap-5 hidden">
        <button
          onClick={() => handleScroll("about-page")}
          className="hover:text-blue-500"
        >
          About Us
        </button>
        <button
          onClick={() => handleScroll("yoga-practice")}
          className="hover:text-blue-500"
        >
          Yoga Practice
        </button>
        <button
          onClick={() => handleScroll("contact-page")}
          className="hover:text-blue-500"
        >
          Contact Us
        </button>
      </div>
      <Link to={"/Camera"} className="flex items-center gap-2 rounded-full border px-2 py-1">
        <h1>Start Now</h1>
        <span className="bg-slate-800 text-white p-1 rounded-full">
          <IoIosArrowRoundForward className="-rotate-45 text-lg" />
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
