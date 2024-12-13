import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const Camera = () => {
  const webcamRef = useRef(null);
  const [result, setResult] = useState("");
  const [processedImage, setProcessedImage] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);

  // Capture image from webcam and send it to Flask
  const captureAndDetect = async () => {
    if (!webcamRef.current || !isDetecting) return;

    const imageSrc = webcamRef.current.getScreenshot();
    try {
      const response = await axios.post("http://localhost:5000/detect", { image: imageSrc });
      setResult(response.data.label);
      setProcessedImage(response.data.image);
    } catch (error) {
      console.error("Error detecting pose:", error);
    }
  };

  // Continuously capture frames at intervals
  useEffect(() => {
    let interval;
    if (isDetecting) {
      interval = setInterval(captureAndDetect, 1000); // Capture every second
    }
    return () => clearInterval(interval); // Cleanup on stop
  }, [isDetecting]);

  return (
    <div>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button
        onClick={() => setIsDetecting((prev) => !prev)}
        className={`px-3 py-1 text-xl ${isDetecting ? "bg-red-500" : "bg-blue-500"}`}
      >
        {isDetecting ? "Stop Detection" : "Start Detection"}
      </button>
      <div className="mt-5">
        {result && <h3 className="text-2xl">Detected Pose: {result}</h3>}
        {processedImage && (
          <img src={processedImage} alt="Processed Frame" className="rounded-lg border-4 border-white" />
        )}
      </div>
    </div>
  );
};

export default Camera;