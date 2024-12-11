import { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const CameraComponent = () => {
  const webcamRef = useRef(null);
  const [result, setResult] = useState("");
  const [processedImage, setProcessedImage] = useState("");

  const captureAndDetect = async () => {
    // Capture the image from the webcam
    const imageSrc = webcamRef.current.getScreenshot();
    try {
      // Send the image to the Flask API
      const response = await axios.post("http://localhost:5000/detect", { image: imageSrc });
      setResult(response.data.label);
      setProcessedImage(response.data.image);
    } catch (error) {
      console.error("Error detecting pose:", error);
    }
  };

  return (
    <div>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureAndDetect} className="bg-blue-500 px-3 py-1 text-xl ">Detect Pose</button>
      <div>
        {result && <h3>Detected Pose: {result}</h3>}
        {processedImage && <img src={processedImage} alt="Processed Frame" />}
      </div>
    </div>
  );
};

export default CameraComponent;
