import React from 'react';
import RSVPLinks from './RSVPLinks'
import Flip from 'react-reveal/Flip'
import DeviceIcons from '../../icons/device icons/Device-icons';


const RSVPInfo =()=>
    <div>
        <img src="./gifs/RSVP-gif.gif" alt='rsvp project' className='gif' />
        <p className= 'project-description'>
            <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
            <img src='/react.png' className='react' alt='React icon'></img>
            <br></br>
            <DeviceIcons />
            This is an RSVP app, you can add a guest, edit the guest,
            remove the guest and confirm them. As well you can filter
            the guests that have not confirmed they are attending.
        </p>
        <Flip bottom>
            <RSVPLinks />
        </Flip>
    </div>

export default RSVPInfo