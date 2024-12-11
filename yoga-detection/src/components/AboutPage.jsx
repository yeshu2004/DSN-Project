

const AboutPage = () => {
  return (
    <div className="min-h-[50vh] w-full lg:px-32 px-5 flex flex-col lg:flex lg:flex-row gap-5">
        <div className="lg:w-1/2 w-full flex flex-col gap-16 lg:gap-8">
            <div className="w-fit px-2 py-[2px] text-sm border rounded-full">
                <h1 className="font-semibold">About us</h1>
            </div>
            <div className="flex flex-col lg:gap-5 gap-8">
                <h1 className="text-5xl">Unlock potential, find serenity: explore yoga&apos;s power</h1>
                <p>At ZenPose, we are dedicated to revolutionizing the way you experience yoga by blending ancient practices with modern technology. Our platform leverages cutting-edge AI and pose detection algorithms to provide real-time feedback and guidance, helping users improve their posture, alignment, and overall practice.</p>
            </div>


        </div>
        <div className="lg:w-1/2 w-full min-h-[50vh] py-12">
            <div className=" bg-slate-700 h-full rounded-2xl text-white px-10 py-10 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-blue-200">Quote</h1>
                    <span className="px-4 rounded-full bg-white pt-1"></span>
                </div>
                <div className="flex flex-col gap-4">
                    <p>I’ve always struggled with maintaining proper alignment during yoga, but this platform changed everything for me! The real-time feedback and personalized guidance are absolutely incredible. It feels like having a personal yoga instructor at home.</p>
                    <h1 className="text-blue-200"><span className="text-white">~</span> Aarav Sharma, Yoga Enthusiast</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage