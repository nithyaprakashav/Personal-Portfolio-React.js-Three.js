import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Feedbacks from "./components/Feedbacks"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import StarsCanvas from "./components/canvas/Stars"

const App = ()=> {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/> 
        <Experience/>
        <Skills/>
        <Projects/>
        <Feedbacks/>
        <Certifications/>
        <div className="relative z-0" >
            <Contact/>
            <StarsCanvas/>
        </div>
      </div>
      {/* <div className="relative z-0 bg-primary ">
        <About/>
      </div> */}
    </BrowserRouter>
  )
}

export default App
