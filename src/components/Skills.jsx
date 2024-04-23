
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";


const Skills = () => {
    return ( 
        <div className="flex flex-row flex-wrap justify-center gap-10 " >
            {technologies.map((tech)=>(
                <div className="w-28 h-28 flex flex-col justify-center items-center " key={tech.name} >
                    <BallCanvas icon={tech.icon}  />
                    <div className="text-secondary" >{tech.name}</div>
                </div>
            ))}
        </div>
     );
}
 
export default SectionWrapper( Skills ,"");