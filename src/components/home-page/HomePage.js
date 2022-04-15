import React from 'react'
import Navbar from  '../navbar/Navbar'

const HomePage = (props) => {
  return (
    <div>
        <Navbar showNavBackground={props.showNavBackground} />
        <div id='home' className='home-div'>
        
            <div className='hello-name-header-container'>
                <h2 className='hello-header'>Hello, I'm</h2>
                <h2 className='name-header'>Jason Pallone</h2>
            </div>


            <h2 className='frontEnd-header' > I'm a Web Developer.</h2>
        </div>
    </div>
  )
}

export default HomePage