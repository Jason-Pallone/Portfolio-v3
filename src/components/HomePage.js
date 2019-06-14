import React, {Component} from 'react'
import Navbar from './Navbar'


class HomePage extends Component{
    state={
        showName: 'none',
        showFullStack: 'none',
        showResume:'none',
        showGitHub: 'none',
        showArrow: 'none',
      }
    


    showName=()=>{
        this.setState({
            showName: ''
        })
    }

    showFullStack=()=>{
        this.setState({
            showFullStack: ''
        })
    }

    showResume=()=>{
        this.setState({
            showResume: ''
        })
    }

    showGitHub=()=>{
        this.setState({
            showGitHub: ''
        })
    }

    showArrow=()=>{
        this.setState({
            showArrow: ''
        })
    }

    componentDidMount(){
      setTimeout(()=>this.showName(), 1500);
      setTimeout(() =>  this.showFullStack(), 2000);
      setTimeout(() =>  this.showResume(), 3000);
      setTimeout(() =>  this.showGitHub(), 3000);
      setTimeout(() =>  this.showArrow(), 3100);
    }

    render(){
      return(
       <div>
         <Navbar />
        <div id='home' className='home-div'>
            <h2 className='hello-header'  style={{display:`${this.state.showHello}`}}>
                Hello, I'm
            </h2>
            <h2 className='name-header'  style={{display:`${this.state.showName}`}}>
                Jason Pallone
            </h2>
            <h2 className='full-stack-header' style={{display: this.state.showFullStack}}>
                I'm a Web Developer.
            </h2>
            <a className='resume' style={{display: this.state.showResume}}>
                Download my resume here!
            </a>
            <a className='github-profile' style={{display: this.state.showGitHub}}>
                View my GitHub here!
            </a>
            <div className='arrow'  style={{display: this.state.showArrow}}>
                <a className='arrow' href="#about"> 
                    &#x21E9; 
                </a>
            </div> 
           
        </div>
      </div>

       
    
    )}
}

    export default HomePage