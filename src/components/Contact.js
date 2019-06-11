import React from 'react'



const Contact = ()=>
    <div className='contact-container'>
       <h1 className='contact-header'>
            Contact me
       </h1>
       <hr className='contact-hr'></hr>
    
        <form  className='contact-form' action='mailto:jasonpallone7593@gmail.com' method='post' encType='text/plain'>
            <input type='text' placeholder='Your name' className='contact-me-input1' name='Name'/>
            <input type='text' placeholder='Your e-mail' className='contact-me-input2' name='E-mail'/>
            <textarea name="Message" rows="15" cols="60" className='contact-me-textarea'></textarea>
            <input type='submit' value="Send" className='contact-submit-button'/>
            <input type="reset" value="Reset" className='contact-reset-button'/>
        </form>
        
    </div>


    export default Contact
