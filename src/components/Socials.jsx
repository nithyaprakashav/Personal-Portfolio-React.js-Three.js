import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../style";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {

    return ( 
        <div className="flex flex-col overflow-hidden" >
            
                    <p className={styles.sectionSubText} >Get Connected with me here</p>
                    <h3 className={styles.sectionHeadText} >My Socials.</h3>

            <div className="flex-col" >       
                <div className="bg-tertiary py-1 rounded-lg mt-4 " >
                <div className={`py-4 text-secondary text-[20px] blue-text-gradient flex items-center gap-6 px-10`} >
                        <FaLinkedin className="scale-[1.5]" />
                        <span>LinkedIn</span>
                    </div>
                </div>
                <div className="bg-tertiary py-1 rounded-lg mt-4 " >
                <div className="py-4 text-secondary text-[20px] blue-text-gradient flex items-center gap-6 px-10" >
                        <FaLinkedin className="scale-[1.5]" />
                        <span>LinkedIn</span>
                    </div>
                </div>
                <div className="bg-tertiary py-1 rounded-lg mt-4 " >
                <div className="py-4 text-secondary text-[20px] blue-text-gradient flex items-center gap-6 px-10" >
                        <FaLinkedin className="scale-[1.5]" />
                        <span>LinkedIn</span>
                    </div>
                </div>
                </div>         
            
        </div>
     );
}
 
export default Socials;