import React from 'react';
import RSVPInfo from './RSVP-Info'

const RSVP = ()=>
  
        <div className='RSVP-container'>
            <h1 className='rsvp-h1'>RSVP</h1>
            <hr className='rsvp-hr'></hr>

            <img src="/RSVP-gif.gif" alt='rsvp project' className='rsvp-gif' /><br></br>

            <RSVPInfo />
        </div>


export default RSVP