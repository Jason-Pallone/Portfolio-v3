import React from 'react';



const Navbar=(props)=>
        <nav style={{background: props.showNavBackground ? 'white':'transparent'}} className= 'navbar' > 
            <a style={{color: props.showNavBackground ? 'black':'white'}} href='#home'>Home</a>
            <a style={{color: props.showNavBackground ? 'black':'white'}} href='#about'>About</a>
            <a style={{color: props.showNavBackground ? 'black':'white'}} href='#portfolio'>Portfolio</a>
            <a style={{color: props.showNavBackground ? 'black':'white'}} href='#contact'>Contact</a>
        </nav>


export default Navbar
