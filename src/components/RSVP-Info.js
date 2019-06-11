import React from 'react';
import RSVPLinks from './RSVPLinks'

const RSVPInfo =()=>
    <div>

        <p className='rsvp-description'>
        This is an RSVP site created in React. You can add a guest, edit the guest,
        remove the guest and confirm them. There is a phantom li element that shows the input value
        while you type, it is removed on submit. There is an option to filter the guests to view only the 
        guests that have confirmed they will attend.
        </p>
        
        <RSVPLinks />
    </div>


export default RSVPInfo