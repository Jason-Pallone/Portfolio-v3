import React from 'react';
import RSVPInfo from './RSVP-Info'
import Flip from 'react-reveal/Flip'


const RSVP =()=>

    <div className='RSVP-container'>
        <h1 className='rsvp-h1'>RSVP</h1>
    <Flip top>   
    <RSVPInfo />
    </Flip>
    </div>



export default RSVP