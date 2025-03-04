import React from "react";
import { SquarePlus, Copy, Sparkles, MousePointerClick, Eraser, ImageUpscale, Images, Settings,} from "lucide-react";
import { Link, NavLink } from "react-router-dom";



function Sidebar() {
  return (
    <>
      <div className=" border-r w-[200px] h-[1003px] flex flex-col items-center space-y-4 p-4 relative">
        <img
          className="h-12 w-12"
          src="/assets/picsart-icon-logo-EE8CEAAED8-seeklogo.com.png"
          alt=""
        />
        <div >
          <NavLink className="flex flex-col items-center p-2 rounded hover:bg-gray-100 m-2">
            <SquarePlus size={30} />
            <span>Create</span>
          </NavLink>

          <NavLink className={({isActive}) => `flex border flex-col mx-2 items-center p-2 rounded hover:bg-gray-100 
           ${isActive ? "bg-gray-100 font-bold" : ""}`}>
            <Copy size={30} />
            <span className="">My Products</span>
          </NavLink>

          <NavLink className="flex flex-col items-center p-2 rounded hover:bg-gray-100 m-2">
            <Sparkles size={30} />
            <span className="flex-wrap text-center p-1">Fashion Generator</span>
          </NavLink>

          <NavLink className="flex flex-col items-center p-2 rounded hover:bg-gray-100 m-2">
            <MousePointerClick size={30} />
            <span className="flex-wrap text-center p-1">SEO Keywords</span>
          </NavLink>

          <NavLink className= "flex flex-col items-center p-2 rounded hover:bg-gray-100 m-2">
            <Eraser size={30} />
            <span>Clean up</span>
          </NavLink>

          <NavLink className="flex flex-col items-center p-2 rounded hover:bg-gray-100 m-2">
            <ImageUpscale size={30} />
            <span>Upscaler</span>
          </NavLink>

          <NavLink className="flex flex-col items-center p-2 rounded hover:bg-gray-100 mt-2">
            <Images size={30} />
            <p className="flex-wrap text-center p-1" >Remove Background</p>
          </NavLink>

        </div>
        
        <div className="flex-col absolute bottom-4"> 
        <Settings className="mb-15" size={30}/>
        <p className="absolute bottom-4 border w-8 h-8 rounded-full text-end"></p>
        </div>
        
      </div>
    </>
  );
}

export default Sidebar;
