import React, {Component} from 'react';


class SubIntro extends Component{
    
    state={
        showSubIntro: false,
    }

    showSubIntro = () => {
        const top = window.pageYOffset;
        if(top>700)
        this.setState({
        showSubIntro: true
        })
    }

    componentDidMount(){
        window.addEventListener("scroll", this.showSubIntro)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.showSubIntro)
    }

    render(){
        return(
            <p className={ this.state.showSubIntro ? 'sub-intro fade-in' : 'hidden'}>
            Coding has become a big part of my life, It is one of my favorite things to do and learn about. 
        </p>
        )
    }

}

export default SubIntro
