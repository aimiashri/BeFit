import './App.css';
import './NewService.css';
import './Bottom.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonials";
import NewService from "./Components/Service";
import Plans from './Components/Plans';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return <div className="App">
      <Home />
      <About />
      <Team />
      <Testimonial />
      <NewService />
      <Plans />
      <Contact />
      <Footer />
    </div>;
}

export default App;
