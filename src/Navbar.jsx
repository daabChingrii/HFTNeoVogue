import React from "react";
import GradientBtn from "./GradientBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="flex justify-between items-center p-4">
        <Link to="/"><div>
                <h1 className="text-thBlue tracking-widest text-3xl">NewVogue</h1>
       </div></Link>
        <ul class="hidden lg:flex font-lato text-white justify-center items-center gap-6">
        <li>
          <Link to="/" className="p-4 uppercase duration-200 
                 hover:text-thBlue cursor-pointer">Home</Link>
          </li>
          <li>
          <Link to="/explore" className="p-4 uppercase duration-200 
                 hover:text-thBlue cursor-pointer">Explore</Link>
          </li>
          <li>
          <Link to="/explore" className="p-4 uppercase duration-200 
                 hover:text-thBlue cursor-pointer">Shop</Link>
          </li>
          <li>
          <Link to="" className="p-4 uppercase duration-200 
                hover:text-thBlue cursor-pointer">Upload</Link>
          </li>
        </ul>
        <div class="hidden lg:flex justify-center items-center gap-4">
        <GradientBtn className="ml-4 capitalize" title='Login'/>
        </div>
        <div class="lg:hidden">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
  );
};

export default Navbar;
