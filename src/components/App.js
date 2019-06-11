import React, {Component} from 'react';
import '../App.css';


// components
import Home from './home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component{


  render(){
    return(
      <div className='App'>
        <Home />
        <About />
        <Projects />
        <Contact />
        <footer>&#160; <p className='footer-text'>Jason Pallone</p>
        <a href="mailto:jasonpallone7593@gmail.com" rel='noopener noreferrer'  alt='gmail logo'
      class="fa fa-google-plus-square"><br></br>
    </a>

    <a href="https://github.com/Jason-Pallone/" rel='noopener noreferrer'  alt="github logo"
     target='_blank' class="fa github">&#xf092;
    </a>

    <a href="https://www.linkedin.com/in/jason-pallone-14070a187/" rel='noopener noreferrer' alt='linkedin logo' 
    target='_blank' class="fa fa-linkedin-square" >
    </a>

    <a href="https://twitter.com/JasonPallone?s=09" rel='noopener noreferrer' alt="twitter icon"
     target='_blank' class="fa fa-twitter-square">
    </a>
        
        </footer>
      </div>
   )}
}


export default App;
