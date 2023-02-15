import React, { useEffect, useState } from 'react';
import './App.css';
import brian from './images/brian.png'
import batman from './images/batman.jpg'
import ye from './images/ye.jpg';

function App(){
    const images = [brian, batman, ye];
    const [imageNum, setImageNum] = useState(0);

    console.log(imageNum);

    function displayImage() {
        return <img src={images[Math.abs(imageNum % 3)]} alt='funny'></img>
    }

    function nextImage() {
        setImageNum(prevNum => prevNum + 1);
    }

    function prevImage(){
        setImageNum(prevNum => prevNum - 1)
    }

    return (
        <>
            <h3>
                Amazing Image Gallery
            </h3>
            <div class='wrapper'>
                <div id='imageHolder'>
                    { displayImage() }
                </div>
            </div>
            
            <div class="buttonWrapper">
                <button onClick={prevImage}>Back</button>
                <button onClick={nextImage}>Next</button>
            </div>
            
        </>
    )
}

export default App