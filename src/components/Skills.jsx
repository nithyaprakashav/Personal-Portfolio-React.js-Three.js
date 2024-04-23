import { motion } from "framer-motion";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Skills = () => {
    return ( 
        <>
        <motion.div variants={textVariant()} >
            <p className={`${styles.sectionSubText}  `}  >Technologies i have learnt so far</p>
            <h2 className={`${styles.sectionHeadText}`} >Skillset.</h2>
        </motion.div>
        
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-20" >
            {technologies.map((tech)=>(
                <div className="w-28 h-28 flex flex-col justify-center items-center " key={tech.name} >
                    <BallCanvas icon={tech.icon}  />
                    <div className="text-secondary" >{tech.name}</div>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default SectionWrapper( Skills ,"");