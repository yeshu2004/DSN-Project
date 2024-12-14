const CameraPage = () => {
  return (
    <div style={{ textAlign: 'center' }} className="flex flex-col items-center justify-center h-screen my-20">
      <h1>Yoga Pose Detection</h1>
      <img
        src="http://127.0.0.1:5000/video_feed"
        alt="Yoga Pose Detection Stream"
        style={{ width: '80%', height: 'auto', border: '2px solid black' }}
        className=""
      />
    </div>
  );
};

export default CameraPage;