import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll'


class Navbar extends Component{

    state={
        highLightHome: '',
        highLightAbout: '',
        highLightProjects: '',
        highLightContact: '',
    }

    highLightHome = () => {
        const top = window.pageYOffset;
        if(top>100)
        this.setState({
        highLightHome: 'rgb(0, 140, 255)'
        })
    }

    highLightAbout = () => {
        const top = window.pageYOffset;
        if(top>400)
        this.setState({
        highLightAbout: 'rgb(0, 140, 255)',
        highLightHome:''
        })
        else{
            this.setState({
                highLightAbout: ''
            })
        }
    }

    highLightProjects = () => {
        const top = window.pageYOffset;
        if(top>1900)
        this.setState({
        highLightProjects:'rgb(0, 140, 255)',
        highLightAbout: '',
        })
        else{
            this.setState({
                highLightProjects: ''
            })
        }
    }

    highLightContact = () => {
        const top = window.pageYOffset;
        if(top>2700)
        this.setState({
        highLightContact:'rgb(0, 140, 255)',
        highLightProjects:'',
        })
        else{
            this.setState({
                highLightContact: ''
            })
        }
    }


    componentDidMount(){
        window.addEventListener("scroll", this.highLightHome)
        window.addEventListener("scroll", this.highLightAbout)
        window.addEventListener("scroll", this.highLightProjects)
        window.addEventListener("scroll", this.highLightContact)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.highLightHome)
        window.removeEventListener("scroll", this.highLightAbout)
        window.removeEventListener("scroll", this.highLightProjects)
        window.removeEventListener("scroll", this.highLightContact)
    }


    render(){
        return(
        <nav className='navbar'>
            <Link 
            style={{color:`${this.state.highLightHome}`}}
            activeClass='highLight'
            to="home"
            smooth={true}
            offset={-0}
            duration={1000}
            >Home
            </Link>

            <Link 
            style={{color:`${this.state.highLightAbout}`}}
            activeClass='highLight'
            to="about"
            smooth={true}
            offset={-80}
            duration={1000}
            >About
            </Link>

            <Link 
            style={{color:`${this.state.highLightProjects}`}}
            activeClass='highLight'
            to="projects"
            smooth={true}
            offset={-50}
            duration={1000}
            >Projects
            </Link>

            <Link 
            style={{color:`${this.state.highLightContact}`}}
            activeClass='highLight'
            to="contact"
            smooth={true}
            offset={0}
            duration={1000}
            >Contact
            </Link>
            
        </nav>
        )
    }
    
}

export default Navbar