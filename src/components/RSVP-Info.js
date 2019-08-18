import React from 'react';
import RSVPLinks from './RSVPLinks'

const RSVPInfo =(props)=>

    <div>
        <img src="/RSVP-gif.gif" alt='rsvp project'
        className={ props.showRSVPInfo ? 'rsvp-gif fade-in' : 'hidden'}
        />
        <br></br>
        
        <p className={ props.showRSVPInfo ? 'rsvp-description fade-in' : 'hidden'}>
            This is an RSVP site created in React. You can add a guest, edit the guest,
            remove the guest and confirm them. There is a phantom li element that shows the input value
            while you type, it is removed on submit. There is an option to filter the guests to view only the 
            guests that have confirmed they will attend.
        </p>
            
        <RSVPLinks showRSVPLinks={props.showRSVPLinks} />
    </div>



export default RSVPInfo