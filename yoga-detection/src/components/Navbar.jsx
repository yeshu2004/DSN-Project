import {Link} from "react-router-dom"
import { TbYoga } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full px-14 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <h1 className="text-3xl">ZenPose</h1>
            <span className="text-2xl">
                <TbYoga /> 
            </span>
        </div>
        <div className="md:flex items-center gap-5 hidden">
            <Link >About Us</Link>
            <Link>Reviews</Link>
            <Link>Contact Us</Link>
        </div>
        <Link to={"/Camera"} className="flex items-center gap-2 rounded-full border px-2 py-1">
            <h1>Start Now</h1>
            <span className="bg-slate-800 text-white p-1 rounded-full">
                <IoIosArrowRoundForward className="-rotate-45 text-lg" />
            </span>
        </Link>
    </div>
  )
}

export default Navbar