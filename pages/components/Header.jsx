import Logo from "./ui/Logo";
import {FaReact } from "react-icons/fa";
import {IoLogoReact,IoLogoJavascript,IoLogoCss3} from "react-icons/Io"
import {SiPostgresql} from "react-icons/si"
import { useRouter } from "next/router";
import  Link from "next/link";
import {GiHamburgerMenu,GiCancel} from "react-icons/gi"
import { useState } from "react"

const Header = () => {
  const [isMenuModal, setIsMenuModal] = useState(false)
  const router = useRouter();

  console.log(router.asPath);
  
  return (

    
    <div
      className={`  h-[6.0rem] z-50 relative    ${
        router.asPath === "/" ? " bg-secondary " : " bg-stone-800 "
      }`}
    >
      <div className="  container mx-auto text-white flex justify-between items-center h-full ">
        <Logo />
        <nav className={ ` sm:static absolute top-0 left-0 sm:w-auto sm:h-auto h-screen  w-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal ===true&& "!grid place-content-center "}`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center font-bold ">
          <li className="px-[35px] py-[10px] uppercase hover:text-orange-600 cursor-pointer">
              <Link href="/">Anasayfa</Link>
            </li>
            <li className="px-[35px] py-[10px] uppercase hover:text-orange-600 cursor-pointer">
              <Link href="/about">Hakkımda</Link>
            </li>
            <li className="px-[35px] py-[10px] uppercase hover:text-orange-600 cursor-pointer">
              <Link href="/skill">Yetenekler</Link>
            </li>
   
          </ul>
          {isMenuModal && (<button className="absolute  top-4 right-4 "
              //butona tıklandığında kapansın
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all text-black " />
            </button> ) }  
        </nav >
        <div className="flex gap-x-4 items-center "  > 
          <a href ="#" >
            <IoLogoCss3 className="hover:text-orange-600 transition-all w-12 h-12" />
          </a>
          <a href="#  ">
            <IoLogoJavascript className="hover:text-orange-600 transition-all w-12 h-12" />
          </a>
          <a href="#">
            <SiPostgresql className="hover:text-orange-600 transition-all w-12 h-12" />
          </a>
          <a href="#">
            <FaReact className="hover:text-orange-600 transition-all w-12 h-12"/>
          </a>
          <button className="sm:hidden inline-block " onClick={()=> setIsMenuModal(true)}>
                <GiHamburgerMenu className="text-xl transition-all cursor-pointer hover:text-primary "/>
            </button> 
     
        </div>

      </div>
    </div>
 
  );
};

export default Header;