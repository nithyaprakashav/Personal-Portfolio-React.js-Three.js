import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn , textVariant } from "../utils/motion";
import { services } from "../constants/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";


const ServiceCard = ({index , title , icon}) => {
    return(
        <Tilt className="xs:w-[250px] w-full " >
            <motion.div variants={fadeIn("right" , "spring" , 0.5*index , 0.75 )} 
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
            >
                <div
                    options={{
                        max:45,
                        scale:1,
                        speed:450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />

                    <h3 className="text-white text-[20px] font-bold text-center" >{title}</h3>

                </div>
            </motion.div>
        </Tilt>
    )
}


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

            <div className="mt-20 flex flex-wrap gap-10 " >
                {services.map((service , index)=>(
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </>
     );
}
 
export default  SectionWrapper( About , "about");