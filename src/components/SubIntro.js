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
            <p className={ this.state.showSubIntro ? 'sub-intro showText' : 'hidden'}>
            Coding has become a big part of my life and I cannot wait to make it my career!
        </p>
        )
    }

}

export default SubIntro
