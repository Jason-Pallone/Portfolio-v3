import React from 'react';

const TechStack=(props)=>
    
            <div className='techStack-container'>
                <h1  className={ props.showStack ? 'stack-header fade-in showText-right' : 'hidden'}>
                My Stack
                </h1>
                <ul  className={ props.showStack ? 'tech-stack-ul fade-in' : 'hidden'}>
                    <li><strong>HTML</strong></li>
                    <li><strong>CSS</strong></li>
                    <li><strong>JavaScript</strong></li>
                    <li><strong>React</strong></li>
                    <li><strong>AJAX</strong></li>
                    <li><strong>jQuery</strong></li>
                    <li><strong>Node.js</strong></li>
                    <li><strong>Express.js</strong></li>
                    <li><strong>MongoDB</strong></li>
                    <li><strong>Redux</strong></li>
                    <li><strong>Git</strong></li>
                    <li><strong>GitHub</strong></li>
                </ul> 
            </div>
   
export default TechStack