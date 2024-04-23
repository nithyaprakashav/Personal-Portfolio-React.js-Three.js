import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Projects = () => {

    return ( 
        <>
        <motion.div variants={textVariant()} >
            <p className={`${styles.sectionSubText}  `}  >Latest Projects I have worked on</p>
            <h2 className={`${styles.sectionHeadText}`} >Projects.</h2>
        </motion.div>

        <div className="w-full flex" >
            <motion.p variants={fadeIn("","",0.1 ,1)} 
                className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
            > 
                Explore my recent full stack projects showcasing my expertise in end-to-end development using the MERN stack (MongoDB, Express.js, React.js, Node.js) through real-world examples of my work. Each project is briefly described, clicking on each project will take you to the live demo, allowing you to experience the features firsthand, while clicking on the GitHub icon will direct you to the project repository on my GitHub profile.
            </motion.p>
        </div>  

        <div className="mt-20 flex flex-wrap gap-7 ">
            {projects.map((project , index)=>(
                
            ))}
        </div>

        </>
     );
}
 
export default SectionWrapper(Projects,"");