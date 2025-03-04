import React from "react";
import { MessageCircle } from "lucide-react";

function HeroSection() {
  return (
    <>
      <div className="min-h-[650px] flex  items-center ">
        <div className="px-40">
          <p className=" mb-4 rounded-4xl inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-white">
            Deliver Your ideas faster
          </p>
          <h1 className=" w-150 text-6xl font-bold text-gray-900 leading-tight">
            Supercharge your productivity with AI image tools
          </h1>
          <p className="text-lg text-gray-700 mt-4 w-[550px]">
            Say goodbye to tedious and time-consuming photo editing tasks and
            embrace a high-productivity workflow with an AI assisted toolset.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 leading-relaxed">
            TRY IT NOW
          </button>
        </div>
        <div>
          <img
            src="/assets/pexels-mh-cheraghi-1637532-3352384.jpg"
            alt=""
            className="w-75 h-100 rounded-4xl object-cover "
          />
        </div>
      </div>
      <div>
        
        <button className="fixed bottom-7 right-7 bg-black text-white p-3 rounded-full shadow-lg border border-orange-300 hover:bg-pink-400 transition">
          <MessageCircle className="w-10 h-10" /> 
        </button>
      </div>
    </>
  );
}

export default HeroSection;
