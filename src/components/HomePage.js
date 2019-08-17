import React, {Component} from 'react'
import Navbar from './Navbar'
import {animateScroll as scroll} from 'react-scroll'

class HomePage extends Component{
    state={
        showFullStack: 'none',
        showResume:'none',
        showGitHub: 'none',
        showArrow: 'none',
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
      setTimeout(() =>  this.showFullStack(), 900);
      setTimeout(() =>  this.showResume(), 1700);
      setTimeout(() =>  this.showGitHub(), 1700);
      setTimeout(() =>  this.showArrow(), 2000);
    }

    scrollToAbout=()=>{
        scroll.scrollTo(800)
    }

    render(){
      return(
       <div>
         <Navbar />
        <div id='home' className='home-div'>
        
        <div className='hello-name-header-container'>
            <h2 className='hello-header'>
                Hello, I'm
            </h2>
           
            <h2 className='name-header'  style={{display:`${this.state.showName}`}}>
                Jason Pallone
            </h2>
        </div>


            <h2 className='full-stack-header' style={{display: this.state.showFullStack}}>
                I'm a Web Developer.
            </h2>
            <a className='resume' href='../resume/Jason-Pallone.pdf' download
             style={{display: this.state.showResume}}>
                Download my resume here!
            </a>
            <a className='github-profile' href='https://github.com/Jason-Pallone'
            target="_blank" rel='noopener noreferrer' style={{display: this.state.showGitHub}}>
                View my GitHub here!
            </a>
            <div className='arrow' style={{display: this.state.showArrow}}>
                <a className='arrow' onClick={this.scrollToAbout}> 
                    &#x21E9; 
                </a>
            </div> 
           
        </div>
      </div>

       
    
    )}
}

    export default HomePage