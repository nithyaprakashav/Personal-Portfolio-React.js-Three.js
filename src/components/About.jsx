import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn , textVariant } from "../utils/motion";

const About = () => {
    return ( 
        <>
            <motion.div variants={textVariant()} >
                <p className={`${styles.sectionSubText}  `}  >Introduction</p>
                <h2 className={`${styles.sectionHeadText}`} >Overview.</h2>
            </motion.div>

            <motion.p variants={fadeIn("" , "" , 0.1 , 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
            >
               I'm a Full-stack web developer proficient in the MERN stack, specializing in React.js for frontend development and Node.js/Express.js for backend solutions. Skilled in MongoDB for database management, with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and Chakra UI for crafting intuitive and responsive user interfaces. Additionally, proficient in programming languages including Java, JavaScript, and Python, enabling versatile and dynamic web application development.
            </motion.p>
        </>
     );
}
 
export default About;