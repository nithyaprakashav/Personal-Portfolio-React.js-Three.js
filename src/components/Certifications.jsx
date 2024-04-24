import { motion } from "framer-motion";
import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";




const Certifications = () => {
    return ( 
        <div className="mt-12 bg-black-100 rounded-[20px] " >
            <div className={`${styles.padding} bg-fuchsia-950 rounded-2xl min-h-[300px] ` } >
                <motion.div variants={textVariant()} >
                    <p className={`${styles.sectionSubText}`} >What others say</p>
                    <h2 className={`${styles.sectionHeadText}`} >Testimonials.</h2>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 `} >
                {testimonials.map((testimonial , index)=>(
                    <FeedBackCard key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Certifications;