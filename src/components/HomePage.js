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
      setTimeout(() =>  this.showFullStack(), 700);
      setTimeout(() =>  this.showResume(), 1400);
      setTimeout(() =>  this.showGitHub(), 1400);
      setTimeout(() =>  this.showArrow(), 1800);
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


            <h2 className='frontEnd-header' style={{display: this.state.showFullStack}}>
                I'm a Front End Developer.
            </h2>
            <a className='resume' href='../resume/Jason-Pallone.pdf' download
             style={{display: this.state.showResume}}>
                View my resume here!
            </a>
            <a className='github-profile' href='https://github.com/Jason-Pallone'
            target="_blank" rel='noopener noreferrer' style={{display: this.state.showGitHub}}>
                View my GitHub here!
            </a>
           
        </div>
      </div>

       
    
    )}
}

    export default HomePage