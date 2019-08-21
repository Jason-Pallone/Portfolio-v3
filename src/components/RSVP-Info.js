import React from 'react';
import RSVPLinks from './RSVPLinks'

const RSVPInfo =(props)=>

    <div>
        <img src="/RSVP-gif.gif" alt='rsvp project' className='rsvp-gif'/>
        <br></br>
        
        <p className= 'rsvp-description'>
            This is an RSVP app created in React. You can add a guest, edit the guest,
            remove the guest and confirm them.
        </p>
            
        <RSVPLinks showRSVPLinks={props.showRSVPLinks} />
    </div>

export default RSVPInfo