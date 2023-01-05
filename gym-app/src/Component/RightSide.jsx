import React from 'react'
import HeroImage from "../gymAssets/hero_image.png"
import HeroImageBack from "../gymAssets/hero_image_back.png"
import Heart from "../gymAssets/heart.png"
import Calories from "../gymAssets/calories.png"

const RightSide = () => {
    return (
        <>
            <button className='btn'>Join Now</button>
            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>
            <img src={HeroImage} alt="" className='hero-image' />
            <img src={HeroImageBack} alt="" className='hero-image-back' />

            <div className='calories'>
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 Kcal</span>
                </div>
            </div>
        </>
    )
}

export default RightSide