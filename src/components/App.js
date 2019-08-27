import React, {Component} from 'react';
import '../App.css';
import Zoom from 'react-reveal/Zoom'


// components
import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'


class App extends Component{

  state={
    showNavBackground: false
}



showNavBackground = () => {
  const top = window.pageYOffset;
  if(top>700)
  this.setState({
  showNavBackground: true
  })
  else{
    this.setState({
      showNavBackground: false
    })
  }
}



componentDidMount(){
    window.addEventListener("scroll", this.showNavBackground)
}

componentWillUnmount(){
  window.addEventListener("scroll", this.showNavBackground)
}

  render(){
    return(
      <div className='App'>
        <HomePage showNavBackground={this.state.showNavBackground}/>
        <Zoom>
        <About />
        </Zoom>
        <Projects />
        <Contact />
        <Footer />
      </div>
   )}
}


export default App;
