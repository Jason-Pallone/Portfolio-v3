import React, {Component} from 'react';


class Navbar extends Component{

    state={
        highLightHome: false,
        highAbout: false,
        highProjects: false,
        highContact: false,
    }

    highLightHome = () => {
        const top = window.pageYOffset;
        if(top>100)
        this.setState({
        highLightHome: true
        })
    }

    componentDidMount(){
        window.addEventListener("scroll", this.highLightHome)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.highLightHome)
    }

    render(){
        return(
        <div className='navbar'>
            <a href="#home" className={ this.state.highLightHome ? 'hightLight' : ''}>Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact" >Contact</a>
        </div>
        )
    }
    
}

export default Navbar