import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({index , name , description , tags , image , source_code_link,deployed_link}) => {
    return (
        <div 
        onClick={()=>{
            window.open(deployed_link,"_blank")
        }}
        className="cursor-pointer"
        >
        <motion.div variants={fadeIn("up" ,"spring" , index*0.5,0.75 )} >
            <Tilt
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
                
            >
                <div className="relative w-full h-[230px]  "
                    
                >
                    <img src={image} alt={name} 
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover " >
                        <div
                            onClick={()=>{
                                window.open(source_code_link,"_blank")
                            }}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
                        >
                            <img src={github} alt="github"
                                className="w-1/2 h-1/2 object-contain"
                                />
                        </div>
                    </div>
                </div>

                <div className="mt-5" >
                    <h3 className="text-white font-bold text-[24px] " >{name}</h3>
                    <p className="mt-2 text-secondary text-[14px] " >{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 " >
                    {tags.map((tag)=>(
                        <p key={tag.name} className={`text-[14px] ${tag.color} `} >
                            #{tag.name}
                        </p>
                    ))}
                </div>

            </Tilt>
        </motion.div>
        </div>
    )
}



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
                <ProjectCard key={`project-${index}`}
                index={index}
                {...project} />
            ))}
        </div>

        </>
     );
}
 
export default SectionWrapper(Projects,"projects");