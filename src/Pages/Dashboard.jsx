import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import { Info, Plus } from "lucide-react";
import Product from "../components/My_Product/Product";
import { MessageCircle } from "lucide-react";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          {/* Navbar */}
          <div className="w-full h-[70px] flex justify-between text-2xl font-bold p-5">
            <div>Add New Product</div>
            <NavLink className="bg-blue-600 text-sm p-1 text-wrap border rounded-3xl h-8">
              Upgrade to Pro
            </NavLink>
          </div>

          {/* Drag and Drop Area (now below the navbar) */}
          <div className="border m-5  w-[1250px] flex justify-center bg-gray-100">
            <div className="border-2 border-dashed w-[1200px]  border-gray-400 rounded-lg p-8 mt-8 mb-8 flex flex-col items-center justify-center">
              <button className="bg-blue-500 flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                <Plus className="mr-4" />
                Start Uploading
              </button>
              <p className="text-gray-600 mt-4">
                Drag and drop anywhere to add product
              </p>
            </div>
          </div>
          {/* Text Section */}
          <div>
            <div className="flex items-center mt-8">
              <p className="text-gray-600 font-bold text-xl mx-4">
                Monthly Products{" "}
              </p>
              <Info className="mr-2" size={15} />
              <p>Monthly Product Limit 0/1</p>
            </div>
          </div>
          <div>
            <Product />
          </div>
          <div>
                    {/*message icon */}
            <button
              className="fixed bottom-7 right-7 bg-black text-white p-3 rounded-full shadow-lg border border-orange-300 hover:bg-pink-400 transition"
            >
              <MessageCircle className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

