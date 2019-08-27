import React from 'react';
import RSVPLinks from './RSVPLinks'
import RubberBand from 'react-reveal/RubberBand'


const RSVPInfo =()=>
    <div>
        <img src="/RSVP-gif.gif" alt='rsvp project' className='rsvp-gif' />
        <p className= 'rsvp-description'>
            This is an RSVP app created in React. You can add a guest, edit the guest,
            remove the guest and confirm them.
        </p>
    
    <RubberBand>
       <RSVPLinks />
    </RubberBand>
    </div>

export default RSVPInfo