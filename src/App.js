
import './App.css';
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {

  
  
  return (
 <>
 <Navbar/>
 <Banner/>
 <About/>
 <Work/>
 <Skills/>
 <Contact/>
 </>
  );
}

export default App;
