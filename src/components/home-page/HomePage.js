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


            <h2 className='frontEnd-header' > I'm a Front End Developer. </h2>
            <a className='resume' href='../resume/Jason-Pallone.pdf' download>
                View my resume here!
            </a>
            <a className='github-profile' href='https://github.com/Jason-Pallone'
            target="_blank" rel='noopener noreferrer' >
                View my GitHub here!
            </a>
        </div>
    </div>
  )
}

export default HomePage