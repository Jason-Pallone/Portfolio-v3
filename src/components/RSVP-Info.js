import React, {Component} from 'react';
import RSVPLinks from './RSVPLinks'

class RSVPInfo extends Component{

    state={
        showRSVP: false,
    }

    showRSVP = () => {
        const top = window.pageYOffset;
        if(top>1800)
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
            <div>
            <img src="/RSVP-gif.gif" alt='rsvp project'
            className={ this.state.showRSVP ? 'rsvp-gif fade-in' : 'hidden'}
             />
            <br></br>
            <p className={ this.state.showRSVP ? 'rsvp-description fade-in' : 'hidden'}>
            This is an RSVP site created in React. You can add a guest, edit the guest,
            remove the guest and confirm them. There is a phantom li element that shows the input value
            while you type, it is removed on submit. There is an option to filter the guests to view only the 
            guests that have confirmed they will attend.
            </p>
            
            <RSVPLinks />
        </div>
        )
    }
}


export default RSVPInfo