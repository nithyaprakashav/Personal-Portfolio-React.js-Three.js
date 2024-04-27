import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu , close } from "../assets";
import MyPicture from "../assets/MyPicture.jpg"
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () => {

    const[active , setActive] = useState('')
    const [toggle , setToggle ] = useState(false)

    return ( 
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed  top-0 z-20 bg-primary `}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto" >
                <div className="flex items-center gap-4  " >

                
                <Link to={"/"} className="flex items-center gap-2" onClick={()=>{
                    setActive(" ")
                    window.scrollTo(0,0)
                }} >
                    
                    <img src={MyPicture}  alt="logo" className="w-9 h-9 object-contain rounded-full" />
                    <p className="text-white text-[18px] font-bold cursor-pointer " > Nithya Prakash A V</p>
                </Link>

                <div className="flex items-center gap-2" onClick={()=>{
                    window.open("https://drive.google.com/file/d/1Z1JbJPuwPvdhPArz9aC5aDO2mXtTdW5R/view?usp=sharing")
                }} >
                    <div className="border-white border bg-tertiary rounded-lg px-3 py-1 flex items-center cursor-pointer">
                        <MdOutlineFileDownload className="w-5 h-5 mr-2 fill-current text-white" />
                        <span className="text-secondary text-[14px] ">My Resume</span>
                    </div>
                </div>

                </div>

                <ul className="list-none hidden sm:flex flex-row gap-10 " >
                    {navLinks.map((link)=>(
                        <li
                        key={link.id}
                        className={`${
                            active === link.title ? "text-white" : "text-secondary"
                        } hover:text-white text-[18px] font-medium cursor-pointer `}
                        onClick={()=> setActive(`${link.title}`)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center " >
                    <img src={toggle ? close: menu  } alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer  " onClick={()=> setToggle(!toggle)}/>

                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ` } >

                    <ul className="list-none flex justify-end items-end flex-col gap-4 " >
                    {navLinks.map((link)=>(
                        <li
                        key={link.id}
                        className={`${
                            active === link.title ? "text-white" : "text-secondary"
                        } hover:text-white font-medium cursor-pointer text-[16px] `}
                        onClick={()=> {
                            setActive(`${link.title}`)
                            setToggle(!toggle)
                            }
                        }
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                    </div>
                </div>

            </div>
        </nav>
     );
}
 
export default Navbar;