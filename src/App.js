// import About from "./About";
import './App.css';
import  Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Project from"./Project"
import Resume from "./Resume"
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
  <div className="App">
    <h1 className="text-3xl font-bold underline">
  
    </h1>
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>

  </div>
  );
}

export default App;
