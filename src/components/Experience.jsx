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

            </motion.div>
        </>
     );
}
 
export default Experience;