import React, {Component} from 'react';
import '../App.css';


// components
import Home from './home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

class App extends Component{


  render(){
    return(
      <div className='App'>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
   )}
}


export default App;
