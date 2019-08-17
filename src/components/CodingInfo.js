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
            <p className={ this.state.showCodingInfo ? 'coding-info fade-in' : 'hidden'}>
            Learning to code was one of the best decisions I have ever made.
            Everyday I continue to learn more!
        </p>
        )
    }

}

export default CodingInfo

