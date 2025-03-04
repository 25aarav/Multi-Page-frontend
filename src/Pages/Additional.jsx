import React from "react";
import { MessageCircle } from "lucide-react";

function Additional() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between">
        {/*Main Section */}
        <div className="flex justify-center items-center  flex-grow p-8">
          <div className="border rounded-full overflow-hidden ">
            <img src="/assets/images.jpg" alt="Phone mockup" className="" />
          </div>
          <div className="m-5">
            <h1 className="text-3xl font-bold mb-4">Ready when you are</h1>
            <p className="text-gray-700 w-[450px] ">
              Jump right in and start exploring. Whether you're here to create,
              manage, or discover, our app is ready to go whenever you are!
            </p>
          </div>
        </div>

        {/*Bottom section*/}
        <div className="flex justify-center items-center mb-4">
          <div className="  bg-purple-600 text-white  rounded-2xl flex items-center px-6">
            <img
              className="w-8 h-8 rounded-2xl mr-4"
              src="/assets/picsart-icon-logo-EE8CEAAED8-seeklogo.com.png"
              alt=""
            />
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
              <a href="#" className="hover:underline">
                Pricing
              </a>
              <a href="#" className="hover:underline">
                How it Works
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Affiliates
              </a>
            </div>
            <div className="m-4 flex-row">
              <button className="hover:underline">Login</button>
              <button className="hover:underline m-2">Sign up</button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0 ">
              <button className="bg-white text-purple-600 ml-5 px-4 py-2 rounded-lg font-semibold">
                Book 1:1 demo
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <button
          className="fixed bottom-7 right-7 bg-black text-white p-3 rounded-full shadow-lg border border-orange-300 hover:bg-pink-400 transition"
        >
          <MessageCircle className="w-10 h-10" />
        </button>
      </div>
    </>
  );
}

export default Additional;
