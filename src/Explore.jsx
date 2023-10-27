import React from "react";
import {data} from "./data/data.js"
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
const Explore = () => {
  return (
    <div className="bg-white p-10">
      <div class="grid grid-cols-4 text-black">
        {
          data.map((item)=>(
            <Link to="/product"><div class="flex flex-col item-center h-96 w-72" key={item.id}>
                <img src={item.img} alt="" class="h-64 w-72 rounded-xl"/>
                <div class="flex justify-between mt-2">
                <p class="text-sm font-medium">{item.prod_name}</p>
                <div class="flex justify-between">
                <p class="text-sm font-semibold text-black px-1">{item.rating}</p>
                <img width="13" height="12" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1"/>
                </div>
                </div>
                <p class="text-sm font-light">Designer - {item.designer}</p>
                <p class="text-sm font-light">{item.material}</p>
                <p class="text-sm font-medium mt-2">{item.price}</p>
            </div></Link>
          ))}
            
    </div>
    </div>
  );
};

export default Explore;
