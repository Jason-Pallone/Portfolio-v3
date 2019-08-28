import React, {Component} from 'react'
import Navbar from './Navbar'

class HomePage extends Component{
    state={
        showFrontEndDevHeader: 'none',
        showLinks:'none',
      }
    



    showFrontEndDevHeader=()=>{
        this.setState({
            showFrontEndDevHeader: ''
        })
    }

    showLinks=()=>{
        this.setState({
            showLinks: '',
        })
    }

    componentDidMount(){
      setTimeout(() =>  this.showFrontEndDevHeader(), 1500);
      setTimeout(() =>  this.showLinks(), 2100);
    }

    render(){
      return(
        <div>
            <Navbar showNavBackground={this.props.showNavBackground} />
            <div id='home' className='home-div'>
            
                <div className='hello-name-header-container'>
                    <h2 className='hello-header'>Hello, I'm</h2>
                    <h2 className='name-header'>Jason Pallone</h2>
                </div>


                <h2 className='frontEnd-header' style={{display: this.state.showFrontEndDevHeader}}>
                I'm a Front End Developer.
                </h2>
                <a className='resume' href='../resume/Jason-Pallone.pdf' download
                style={{display: this.state.showLinks}}>
                View my resume here!
                </a>
                <a className='github-profile' href='https://github.com/Jason-Pallone'
                target="_blank" rel='noopener noreferrer' style={{display: this.state.showLinks}}>
                View my GitHub here!
                </a>
            </div>
        </div>

       
    
    )}
}

    export default HomePage