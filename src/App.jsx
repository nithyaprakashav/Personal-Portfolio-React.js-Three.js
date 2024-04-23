import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

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
      </div>
      {/* <div className="relative z-0 bg-primary ">
        <About/>
      </div> */}
    </BrowserRouter>
  )
}

export default App
