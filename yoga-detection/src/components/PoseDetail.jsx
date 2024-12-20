import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TbYoga } from "react-icons/tb";

const PoseDetail = () => {
  const { name } = useParams();
  const [pose, setPose] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoseDetail = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/LunaticPrakash/yoga-api/master/yoga-api.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch yoga pose details");
        }
        const data = await response.json();
        console.log(data);
        const selectedPose = data.find(
          (item) => item.sanskrit_name.toString() === name
        );

        if (!selectedPose) {
          throw new Error("Pose not found");
        }

        setPose(selectedPose);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPoseDetail();
  }, [name]);

  if (loading) {
    return <div className="text-center text-xl">Loading Pose Details...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white w-full px-10 lg:px-14 py-10">
      <div className="flex items-center justify-between">
        <Link to={"/"} className="w-fit flex items-center gap-2 pb-5">
          <h1 className="text-3xl">ZenPose</h1>
          <span className="text-2xl">
            <TbYoga />
          </span>
        </Link>
        <Link to={"/"} className="">
            <h1 className="hover:text-red-600 text-red-500 font-semibold">Back to Home</h1>
        </Link>
      </div>
      <div className="bg-white text-black rounded-xl">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2 text-blue-600 italic underline">
          {pose.sanskrit_name}
        </h1>
        <h2 className="text-xl italic mb-5">{pose.english_name}</h2>

        {/* Procedure */}
        <div className="mb-5">
          <h3 className="text-2xl font-semibold pb-3 italic">Procedure:</h3>
          {pose.procedure.map((line, index) => (
            <p key={index} className="pb-1 text-lg">
              {index+1}) {line}
            </p>
          ))}
        </div>

        {/* Benefits */}
        {pose.benefits && (
          <div className="mb-5">
            <h3 className="text-2xl font-semibold pb-3 italic">Benefits:</h3>
            {pose.benefits.map((line, index) => (
              <p key={index} className="pb-1 text-lg">
                {line}
              </p>
            ))}
          </div>
        )}

        {/* target_body_parts */}
        {pose.target_body_parts && (
          <div className="mb-5">
            <h3 className="text-2xl font-semibold italic pb-3">
              Target body parts:
            </h3>
            {pose.target_body_parts.map((line, index) => (
              <p key={index} className="pb-1 text-lg">
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Pose URL */}
        {pose.poseUrl && (
          <div className="mt-5">
            <a
              href={pose.poseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-lg"
            >
              Learn more about {pose.english_name}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoseDetail;
