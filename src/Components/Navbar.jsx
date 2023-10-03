import React from "react";
import GradientBtn from "./GradientBtn";

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "shop",
        },
       
        {
          id: 3,
          link: "upload",
        },
        {
          id: 4,
          link: "explore",
        },
      ];

  return (
    <div className="absolute w-full h-24 bg-black text-white z-20">
      <div className="flex justify-between items-center
      max-w-screen-xl mx-auto px-4 h-full">
        <div>
          <h1 className="text-thBlue tracking-widest 
          text-3xl">NewVogue</h1>
        </div>

        <div className="hidden lg:flex items-center">
        <ul className="flex">
        {
            links.map(({id, link}) => (
                <li key={id} className="p-4 uppercase duration-200 
                hover:text-thBlue cursor-pointer">{link}</li>

            ))
        }
      

        </ul>
        <GradientBtn className="ml-4 capitalize" title='Login'/>
        
        </div>

        <div className="block lg:hidden">
        <FaBars/>

        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
