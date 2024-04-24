import { motion } from "framer-motion";
import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";
import { IoIosLink } from "react-icons/io";
import { Tilt } from "react-tilt";


const CertificateCard = ({name, skill, company, image, source_code_link , index}) => {
    return (
        <motion.div
            variants={fadeIn("right","spring",index*0.5,0.75)}
            
            onClick={()=>{
                window.open(source_code_link,"_blank")
            }}>
            <Tilt
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full relative cursor-pointer"
            >
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover "
            >
                <div
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                    <IoIosLink className="text-white" />
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-white tracking-wider text-[18px] ">{name}</p>
                
            </div>

            <div>
                <img src={image} alt={`feedback-by-${name}`} className="w-full h-full mt-6 object-cover rounded-xl " />
            </div>

            <div className="mt-1">
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px] ">
                            <span className="blue-text-gradient">from</span> {company}
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 ">
                    <p key={skill} className="text-[14px] pink-text-gradient ">
                        #{skill}
                    </p>
                </div>
            </div>
            </Tilt>
        </motion.div>
        
    )
}




const Certifications = () => {
    return ( 
        <div className="mt-12 bg-black-100 rounded-[20px] " >
            <div className={`${styles.padding} bg-purple-950 rounded-2xl min-h-[300px] ` } >
                <motion.div variants={textVariant()} >
                    <p className={`${styles.sectionSubText}`} >Skills I am Certified In</p>
                    <h2 className={`${styles.sectionHeadText}`} >Certifications.</h2>
                </motion.div>

                <div className="w-full flex mb-10" >
                    <motion.p variants={fadeIn("","",0.1 ,1)} 
                        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
                    > 
                        Click on the Cards to view the Certificates.
                    </motion.p>
                </div>

            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 `} >
                {certifications.map((certificate , index)=>(
                    <CertificateCard key={certificate.name}
                        index={index}
                        {...certificate}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SectionWrapper(Certifications,"");