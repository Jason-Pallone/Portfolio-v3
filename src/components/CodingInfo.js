import React, {Component} from 'react';


class CodingInfo extends Component{
    
    state={
        showCodingInfo: false,
    }

    showCodingInfo = () => {
        const top = window.pageYOffset;
        if(top>800)
        this.setState({
        showCodingInfo: true
        })
    }

    componentDidMount(){
        window.addEventListener("scroll", this.showCodingInfo)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.showCodingInfo)
    }

    render(){
        return(
            <p className={ this.state.showCodingInfo ? 'coding-info showText' : 'hidden'}>
            I've been coding since 2018, learning to code was one of the best decisions i've ever made.
            Everyday I learn more about code, each time I learn more, I fall more in love.
        </p>
        )
    }

}

export default CodingInfo

