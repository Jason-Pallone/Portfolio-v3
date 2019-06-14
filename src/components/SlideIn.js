import React, {Component} from 'react';

class SlideIn extends Component{

    state={
        showTexts: false,
    }
    /*
    showText = () => {
        // get how many px we've scrolled
        console.log(window.pageYOffset)
        const top = window.pageYOffset;
        if(top>4850)
        this.setState({
          showTexts: true
        })
      }

    componentDidMount(){
        window.addEventListener("scroll", this.showText)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.showText)
    }
    */


    render(){
        const intro= document.querySelector('.intro')
        return(
            <div classname="hidden">
             
           
                <h1 classname={this.state.showTexts ? 'showText' : 'hidden'}>You did it!</h1> 
            </div>
        )
    }
}

export default SlideIn