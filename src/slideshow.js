import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from './photos/Screenshot_20221222_013329.png'
import wordsoflove from './fonts/WORDSOFLOVE.ttf'
import Sound from 'react-sound'
import loversRock from './songs/loversRock.mp3'


export const Slideshow = () => {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '70vh',
      }
      const slideImages = [
        {
          url: 'url(' + require('./photos/photo1.jpeg') + ')',
        },
        {
          url: 'url(' + require('./photos/photo2.jpg') + ')',
        },
        {
          url: 'url(' + require('./photos/photo23.jpg') + ')',
        },
        {
          url: 'url(' + require('./photos/photo3.jpg') + ')',
        },
        {
          url: 'url(' + require('./photos/photo4.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo5.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo6.jpeg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo7.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo8.jpeg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo9.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo10.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo11edit.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo12.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo13.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo14.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo15.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo16.jpeg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo17.jpeg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo18.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo19.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo20.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo21.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo22.jpg') + ')',
        },
        {
            url: 'url(' + require('./photos/photo24.jpg') + ')',
        },
      ];      
      const handleSongLoading = () => {
        console.log("Loading")
      }
    
    return (
      <div className="slide-container">
        <div style={{fontFamily: "WORDSOFLOVE", fontSize: 50}}>HAPPY VALENTINES DAY ELINA</div>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `${slideImage.url}` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}