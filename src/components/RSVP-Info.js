import React from 'react';
import RSVPLinks from './RSVPLinks'
import Flip from 'react-reveal/Flip'


const RSVPInfo =()=>
    <div>
        <img src="/RSVP-gif.gif" alt='rsvp project' className='rsvp-gif' />
        <p className= 'rsvp-description'>
            This is an RSVP app created in React. You can add a guest, edit the guest,
            remove the guest and confirm them.
        </p>
    
    <Flip bottom>
       <RSVPLinks />
    </Flip>
    </div>

export default RSVPInfo