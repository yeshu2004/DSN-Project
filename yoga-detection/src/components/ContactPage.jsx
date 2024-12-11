const ContactPage = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col lg:flex-row lg:px-20 lg:gap-20 gap-10 py-5 px-10">
      {/* Left Section */}
      <div className="lg:w-1/2  h-full p-5">
        <div className="h-full w-full flex flex-col gap-5">
          <h1 className="text-6xl tracking-tight font-semibold">
            Get in touch
          </h1>
          <h3>
            We’d love to hear from you! Whether you have questions about our
            platform, feedback to help us improve, or just want to share your
            yoga journey, we&apos;re here for you.
          </h3>
          <div className="flex flex-col gap-1">
            <div className="text-xl pb-2">Contact Information</div>
            <a href="mailto:support@helpzenpose.com">
              📧 Email: support@helpzenpose.com
            </a>
            <a href="tel:+11234567890">📞 Phone: +1 (123) 456-7890</a>
            <a href="">📍 Address: 123 Harmony Lane, Wellness City, YogaLand</a>
          </div>
          <div className="md:block hidden">
            <h1 className="text-xl pb-2">Follow Us</h1> 
            <div className="flex flex-col gap-1">
                <a href="">Instagram: @ZenPoseIG</a>
                <a href="">Facebook: ZenPoseFC</a> 
                <a href="">Twitter: @ZenPoseX</a>
            </div>
          </div>
        </div>
      </div>
      {/*Middle section*/}
      <div className="h-full p-[0.6px] rounded-full bg-black bg-opacity-15"></div>
      {/* Right Section */}
      <div className="lg:w-1/2 h-full ">
        <form className="bg-white p-5 rounded-xl flex flex-col gap-4">
          <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-slate-800 text-blue-300 py-2 px-4 rounded-md hover:bg-slate-900 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
