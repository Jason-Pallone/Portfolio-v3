import React from 'react';

    
const RSVPLinks =(props)=>
 
    <div>
        <div className={props.showRSVPLinks ? 'website-div-rsvp fade-in' : 'hidden'}>
            <a href="https://jasonpallone-rsvp.com/" rel='noopener noreferrer' target="_blank" 
            alt='RSVP site link' className='rsvp-website-link'>
                <strong>
                    View the live site!
                </strong>
            </a>
        </div>

        <div className={props.showRSVPLinks ? 'github-div-rsvp fade-in' : 'hidden'}>
            <a href="https://github.com/Jason-Pallone/RSVP" rel='noopener noreferrer' target="_blank"
            alt='link to RSVP repo'  className='rsvp-github-link'> 
                <strong>
                    View GitHub repo!
                </strong>
            </a>
        </div>
    </div>
 

export default RSVPLinks