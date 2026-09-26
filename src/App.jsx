import { About } from "./layout/About.jsx"
import { Accueil } from "./layout/Accueil.jsx"
import { Project } from "./layout/Project.jsx"
import {Header} from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"

function App() {

  return (
    <div className="flex flex-col">
      <Header></Header>
      <Accueil></Accueil>
      <About></About>
      <Project></Project>
      <Footer></Footer>
      
    </div>
  )
}

export default App
