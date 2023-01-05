import React from 'react'
import Button from '../Button';
import Figures from '../Figures';
import Header from '../Header/Header';
import HeroText from '../HeroText';
import TheBestAdd from '../TheBestAdd';
import "./Hero.css"
import HeroImage from "../../gymAssets/hero_image.png"
import HeroImageBack from "../../gymAssets/hero_image_back.png"
import Heart from "../../gymAssets/heart.png"
import Calories from "../../gymAssets/calories.png"



const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            <TheBestAdd/>
            <HeroText/>
            <Figures/>
            <Button/>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>
            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>
            <img src={HeroImage} alt="" className='hero-image'/>
            <img src={HeroImageBack} alt="" className='hero-image-back'/>


        </div>
    </div>
  )
}

export default Hero;