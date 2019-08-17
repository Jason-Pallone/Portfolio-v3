import React, {Component} from 'react';
import RSVPInfo from './RSVP-Info'

class RSVP extends Component{

state={
    showRSVP: false,
}

showRSVP = () => {
    const top = window.pageYOffset;
    if(top>1750)
    this.setState({
    showRSVP: true
    })
}

componentDidMount(){
    window.addEventListener("scroll", this.showRSVP)
}

componentWillUnmount(){
    window.removeEventListener("scroll", this.showRSVP)
}

  render(){
      return(
    <div className='RSVP-container'>
        <h1 className={this.state.showRSVP ? 'rsvp-h1 pop-in' : 'hidden'}>RSVP</h1>
       

        <RSVPInfo />
    </div>
      )
  }
}


export default RSVP