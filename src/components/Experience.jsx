import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../style";
import {experiences} from "../constants"
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const Experience = () => {
    
    return ( 
        <>
            <motion.div variants={textVariant()} >
            <p className={`${styles.sectionSubText}  `}  >My work so far</p>
            <h2 className={`${styles.sectionHeadText}`} >Overview.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col" >
                <VerticalTimeline>
                    {experiences.map((experience,index)=>{
                        <ExperienceCard experience={experience} key={index} />
                    })}
                </VerticalTimeline>
            </div>

        </>
     );
}
 
export default SectionWrapper(Experience, "work");