import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import { styles } from "../style";
import { FaLinkedin ,FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {

    return (
        <div className=" xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
            <motion.div variants={slideIn("left","tween",0.2 , 1)} className="flex-[1] bg-black-100 p-8 rounded-2xl">
                <p className={styles.sectionSubText}>Connect with me</p>
                <h3 className={styles.sectionHeadText}>Socials.</h3>

                <div  className="flex flex-col  mt-4 xl:mt-12  gap-4 xl:gap-8">
                    <motion.div 
                    variants={fadeIn("up" ,"spring" , 0.5,0.75 )}
                    className="flex items-center gap-4 bg-tertiary px-4 py-4 rounded-lg cursor-pointer hover:bg-fuchsia-950 "
                        onClick={()=>{
                            window.open("https://www.linkedin.com/in/nithyaprakashav/","_blank")
                        }}
                    >
                        <FaLinkedin size={24} />
                        <p className="green-text-gradient tracking-wider">Visit my LinkedIn Profile</p>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("up" ,"spring" , 1,0.75 )}
                    className="flex items-center gap-4 bg-tertiary px-4 py-4 rounded-lg cursor-pointer hover:bg-fuchsia-950"
                        onClick={()=>{
                            window.location.href = "mailto:nithyaprakashav22@gmail.com"
                        }}
                    >
                        <MdEmail size={24} />
                        <p className="pink-text-gradient tracking-wider">Send me a Mail</p>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("up" ,"spring" , 1.5,0.75 )}
                    className="flex items-center gap-4 bg-tertiary px-4 py-4 rounded-lg cursor-pointer hover:bg-fuchsia-950"
                        onClick={()=>{
                            window.open("https://github.com/nithyaprakashav","_blank")
                        }}
                    >
                        <FaGithub size={24} />
                        <p className="green-text-gradient tracking-wider">Visit my Github Profile</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>

    );
}
 
export default Socials;