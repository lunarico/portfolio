import './main.scss';
import {NavBar} from './Layout/NavBar/NavBar'
import {LanguageProvider} from './Context/LanguageProvider';
import {AboutMe} from './Components/AboutMe/AboutMe';
import {Projects} from './Components/Projects/Projects'
import {Experience} from './Components/Experience/Experience'
import {Skills} from './Components/Skills/Skills'
import {Certificates} from './Components/Certificates/Certificates'
import {Footer} from './Layout/Footer/Footer'


function App() {
  return (
    <div className="App">
      <LanguageProvider>
          <NavBar/>
          <AboutMe/>
          <Skills/>
          <Projects/>     
          <Experience/>
          <Certificates />
          <Footer/>
      </LanguageProvider>
    </div>
  );
}

export default App;