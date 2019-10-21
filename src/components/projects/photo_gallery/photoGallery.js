import React from 'react'
import PhotoGalleryLinks from './photoGalleryLinks.js'
import DeviceIcons from '../../icons/device icons/Device-icons'
import Flip from 'react-reveal/Flip'



const PhotoGallery = ()=>
    <div className='individual-project-container'>
        <h1 className='individual-project-h1'>Photo Gallery</h1>
        <img src='./gifs/photo-gallery.gif' alt='gallery gif' className='gif'></img>
        <p className='project-description'>
            <img src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
            <img src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' /> 
            <br></br>
            <DeviceIcons />
            This is an interactive photo gallery. You can hover over each photo to see different animations that 
            will display the description and a download link. This project was created using HTML and CSS. 
        </p>
        <Flip top>
            <PhotoGalleryLinks />
        </Flip>
    </div>


export default PhotoGallery