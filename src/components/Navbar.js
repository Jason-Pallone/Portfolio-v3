import React from 'react';



const Navbar=(props)=>
        <nav style={{background: props.showNavBackground ? 'white':'transparent'}} className= 'navbar' > 
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact</a>
        </nav>


export default Navbar
