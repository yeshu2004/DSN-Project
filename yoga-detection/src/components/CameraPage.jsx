import CameraComponent from "./Camera"

const CameraPage = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-full text-white">
      <div className="px-10 py-5">
        <h1 className="text-4xl pb-5">Yoga Pose Detection</h1>
        <CameraComponent/>
      </div>
    </div>
  )
}

export default CameraPage