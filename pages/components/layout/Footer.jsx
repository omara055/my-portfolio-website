import React from 'react'
import {FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary text-white padding:4rem">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <div className="text-[30px]">İletişim</div>
            <div className="flex flex-col gap-y-2 mt-3">
          <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">0507 792 44 54</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">omeraydogduu.5@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1 ">
            <div className="text-[38px] font-dancing ">Ömer Faruk Aydoğdu</div>
            <a  className ="flex gap-x-4 items-center justify-center " >
            <FaInstagram className="hover:text-orange-600 transition-all w-8 h-12" />
            <p>omeraydogddu</p>
          </a>
        
          </div>
          <div className="md:flex-1">
            <div className="text-[30px]">İletişim Saatleri</div>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Hergün</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2023 All Rights Reserved By Ömer Faruk Aydoğdu
        </p>
      </div>
    </div>
  );
}

export default Footer