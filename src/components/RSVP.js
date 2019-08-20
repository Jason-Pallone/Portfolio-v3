import React from 'react';
import RSVPInfo from './RSVP-Info'

const RSVP =(props)=>

    <div className='RSVP-container'>
        <h1 className='rsvp-h1'>RSVP</h1>
       
        <RSVPInfo 
        showRSVPLinks={props.showRSVPLinks}
         />
    </div>



export default RSVP