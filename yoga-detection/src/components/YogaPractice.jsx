import img1 from "../assets/img/garudasana.jpg";
import img2 from "../assets/img/Balasana.jpg";
import img3 from "../assets/img/Halasana.jpeg";
import img4 from "../assets/img/malasanapose.jpg";
import img5 from "../assets/img/Simhasana.jpg";
import img6 from "../assets/img/uttanasana.jpg";
import viewMoreImg from '../assets/img/viewmore.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const YogaPractice = () => {
  const YogaPose = [
    {
      id: 1,
      img: img1,
      yogapose: "Garudasana",
      link: "https://en.wikipedia.org/wiki/Garudasana"
    },
    {
      id: 2,
      img: img2,
      yogapose: "Balasana",
      link: "https://en.wikipedia.org/wiki/Balasana"
    },
    {
      id: 3,
      img: img3,
      yogapose: "Halasana",
      link: "https://en.wikipedia.org/wiki/Halasana"
    },
    {
      id: 4,
      img: img4,
      yogapose: "Malasana",
      link: "https://en.wikipedia.org/wiki/Malasana"
    },
    {
      id: 5,
      img: img5,
      yogapose: "Simhasana",
      link: "https://en.wikipedia.org/wiki/Simhasana"
    },
    {
      id: 6,
      img: img6,
      yogapose: "Uttanasana",
      link: "https://en.wikipedia.org/wiki/Uttanasana"
    },
  ];

  return (
    <div className="min-h-screen w-full px-10 py-20">
      <div className="flex flex-wrap gap-y-10 items-center justify-evenly">
        <div className="bg-zinc-900 text-slate-200 h-[25rem] w-[40vh] rounded-2xl relative">
          <h1 className="text-[2.4rem] leading-9 px-10 pt-10">
            Discover yoga&apos;s practices
          </h1>
          <p className="absolute bottom-10 leading-4 left-10 right-10">
            Discover the transformative power of various yoga poses and their
            benefits to your mind, body, and spirit.
          </p>
        </div>
        {YogaPose.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-zinc-900 h-[25rem] w-[40vh] rounded-2xl overflow-hidden relative"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.yogapose}
                className="h-full w-full object-cover"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-5">
                <Link to={item.link} className="text-xl">{item.yogapose}</Link>
              </div>
            </div>
          );
        })}

        <div className="bg-slate-900 h-[25rem] w-[40vh] rounded-2xl overflow-hidden relative">
            <img
                src={viewMoreImg}
                alt="View More"
                className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50 flex flex-col gap-3 items-center justify-center">
                <span className="border rounded-full flex items-center justify-center p-1"><IoIosArrowRoundForward className="text-7xl text-white text-opacity-90 -rotate-45" /></span>
                <div className="text-white text-2xl">View More</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default YogaPractice;
