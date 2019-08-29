import React from 'react';
import RSVPLinks from './RSVPLinks'
import Flip from 'react-reveal/Flip'


const RSVPInfo =()=>
    <div>
        <img src="/RSVP-gif.gif" alt='rsvp project' className='rsvp-gif' />
        <p className= 'rsvp-description'>
        <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
        <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
        <img src='/react.png' className='react' alt='React icon'></img> 
        <br></br>
            This is an RSVP app created in React. You can add a guest, edit the guest,
            remove the guest and confirm them.
        </p>
    
    <Flip bottom>
       <RSVPLinks />
    </Flip>
    </div>

export default RSVPInfo