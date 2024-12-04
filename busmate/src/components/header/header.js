import React from "react";
import { Link} from "react-router-dom";
import { FaBars } from 'react-icons/fa';
const Header =() =>{
    return(
            <nav className="flex flex-row flex-col h-[8ch] fixed top-0 left-0 md:px-24 sm:px16 px-4 backdrop-blur-lg transition-transform duration-3000 z-50 bg-blue-1000  w-full bg-gray-500">
                <div className="w-full h-full flex items-center justify-between font bold" >
                  {/* Logo */}
                   <Link to='/header' className="text-4xl text-[rgb(255,255,255)] ">
                   busMATE
                   </Link>

                  {/* Hamberger manu */}
                   <div to className=" w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-1 text neutral-700">
                     <FaBars /> 
                   </div>

                  {/* Nav links and button */}
                   <div className="w-full flex items-center justify-end ">
                      {/* Nav links */}
                       <div className="list-none md:items-center items-start flex-wrap md:flex-row flex-col md-gap-8 gap-4 text-lg text-neutral-500 font-normal">
                             <Link to='/home' className="hover:text-orange-900 ease-in-out duration-3000">
                              Home
                             </Link>
                       </div>
                      {/* Button */}
                       <div className="flex items-center justify-center">
                            <button className="md:w-fit w-full md:px-4 px-6 md:py-1 py-2.5 bg-[rgb(115,120,50)] border border-gray-400 hover:border-gray-900 md:rounded-full rounded-xl text-base text-normal text-neutral-50 hover:text-green-900 ease-in-out duration-300" >
                                <Link to='/signin'> Sign in </Link>
                            </button>
                       </div>
                   </div>
                
                </div>
           </nav>
    );
}
export default Header;