import React, {Component} from 'react';
import TechStack from './TechStack'
import SubIntro from './SubIntro';
import CodingInfo from './CodingInfo'

class About extends Component{

    
    state={
        showAbout:false
    }

    showAbout = () => {
        const top = window.pageYOffset;
        if(top>400)
        this.setState({
        showAbout: true
        })
    }

    componentDidMount(){
        window.addEventListener("scroll", this.showAbout)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.showAbout)
    }



        render(){
            return(
        
        <div  id="about" className='about-container'>
            <h1 className='about-header'>
            About
            </h1>

            <div className='about-me-container'>
                <div  className={ this.state.showAbout ? 'intro showText' : 'hidden'} >
                    <p>
                        My name is Jason Pallone, I'm a Front End Developer who specializes in React.
                        I love to learn and I am currently seeking a new role as a Developer.
                        I have experience with JavaScript, HTML, CSS, React.js, AJAX, jQuery, Express.js, Node.js, mongoDB and Redux.
                        I also have experience with Git and GitHub.  I have a strong attention to detail, critical
                        thinking and problem solving skills. I am very passionate about coding and learning, I'm a life long learner who
                        loves to collaborate with teams to generate success.
                    </p>

                <SubIntro />
                <CodingInfo />
                <TechStack />
                </div>
            </div>
        </div>
        )}
}

    export default About