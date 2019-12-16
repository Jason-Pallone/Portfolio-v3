import React from 'react';
import RSVPLinks from './RSVPLinks'
import Flip from 'react-reveal/Flip'
import DeviceIcons from '../../icons/device icons/Device-icons';
import TechIcons from '../../icons/tech-icons/Tech-icons'


const RSVPInfo =()=>
    <div>
        <img src="./gifs/RSVP-gif.gif" alt='rsvp project' className='gif' />
        <p className= 'project-description'>
            <TechIcons />
            <img src='/React-icon.png' className='react-icon' alt='React icon'></img>
            <br></br>
            <DeviceIcons />
            This is an RSVP app. You can add a guest, edit the guest,
            remove the guest and confirm them. As well you can filter
            the guests that have not confirmed they are attending.
            This project was created using React, JSX and CSS. 
        </p>
        <Flip bottom>
            <RSVPLinks />
        </Flip>
    </div>

export default RSVPInfo