import React from 'react'
import Button from '../Button';
import Figures from '../Figures';
import Header from '../Header/Header';
import HeroText from '../HeroText';
import RightSide from '../RightSide';
import TheBestAdd from '../TheBestAdd';
import "./Hero.css"



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
        <RightSide/>        

        </div>
    </div>
  )
}

export default Hero;