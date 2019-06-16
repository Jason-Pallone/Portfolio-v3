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
            <hr className='about-hr'></hr>

            <div className='about-me-container'>
                <div  className={ this.state.showAbout ? 'intro showText' : 'hidden'} >
                    <p>
                        My name is Jason Pallone, I'm a Full Stack Developer who specializes in React, and I love to learn!
                        I am currently seeking my first role as a Junior Developer.
                        I have experience with HTML, CSS, JavaScript, React.js, AJAX, jQuery, Express.js, node.js, mongoDB and redux.
                        I also have experience with GIT. I am very passionate about coding and learning, I'm a life long learner who
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