import React, {Component} from 'react';


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
        <div className='navbar'>
            <a href="#home"  style={{color:`${this.state.highLightHome}`}}>Home</a>
            <a href="#about" style={{color:`${this.state.highLightAbout}`}}>About</a>
            <a href="#projects" style={{color:`${this.state.highLightProjects}`}}>Projects</a>
            <a href="#contact" style={{color:`${this.state.highLightContact}`}} >Contact</a>
        </div>
        )
    }
    
}

export default Navbar