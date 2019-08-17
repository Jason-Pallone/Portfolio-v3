import React, {Component} from 'react';

    
class RSVPLinks extends Component{
    state={
        showRSVPLinks: false,
    }

    showRSVPLinks = () => {
        const top = window.pageYOffset;
        if(top>1750)
        this.setState({
        showRSVPLinks: true
        })
    }

    componentDidMount(){
        window.addEventListener("scroll", this.showRSVPLinks)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.showRSVPLinks)
    }
    render(){
        return(
    <div>
    <div className={this.state.showRSVPLinks ? 'website-div-rsvp fade-in' : 'hidden'}>
        <a href="https://jasonpallone-rsvp.com/" rel='noopener noreferrer' target="_blank" 
        alt='RSVP site link' className='rsvp-website-link'>
            <strong>
                View the live site!
            </strong>
        </a>
    </div>

    <div className={this.state.showRSVPLinks ? 'github-div-rsvp fade-in' : 'hidden'}>
        <a href="https://github.com/Jason-Pallone/RSVP" rel='noopener noreferrer' target="_blank"
        alt='link to RSVP repo'  className='rsvp-github-link'> 
            <strong>
                View GitHub repo!
            </strong>
        </a>
    </div>
    
    </div>
        )}
}
   

export default RSVPLinks