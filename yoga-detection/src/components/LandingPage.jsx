import Navbar from "./Navbar";
import landingimg from "../assets/img/landingimg.jpg";

const LandingPage = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[80vh] w-full px-5 lg:px-10 overflow-hidden">
        <div
          className="h-full w-full rounded-[1.5rem] flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${landingimg})`,
          }}
        >
          <div className="flex flex-col gap-4 p-6 rounded-lg">
            <h1 className="lg:text-7xl text-5xl text-white">
              Perfecting Poses with ZenPose
            </h1>
            <div className="flex items-center justify-center">
              <p className="w-1/2 text-white text-sm">
                Discover the power of AI-driven yoga assistance with real-time
                pose detection, detailed feedback, and personalized guidance to
                elevate your practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
