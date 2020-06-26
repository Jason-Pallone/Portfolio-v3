import React from 'react';
import Fade from 'react-reveal/Fade';

//Components
import DeviceIcons from '../../icons/device icons/Device-icons';
import FullStackConfLinks from './full-stack-conf-links';



const FullStackConf =()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Full Stack Conf</h1>
        <img src='./gifs/full-stack-conf-screenshot.PNG' alt='full stack conf project' className='gif'></img>
        <p className= 'project-description'>
        <img className='techStack-icon' src='/Bootstrap-icon.png' alt='bootstrap icon' />
        <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <DeviceIcons />
            This is a project built using Bootstrap and HTML5, it's for a fake conference for Full Stack JavaScript.
            it has a modal that pops up when you click any of the register buttons. The site is fully responsive for all
            devices.
        </p>
        <Fade top>
            <FullStackConfLinks />
        </Fade>
    </div>

export default FullStackConf