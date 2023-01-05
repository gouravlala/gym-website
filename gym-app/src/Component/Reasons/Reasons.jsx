import React from 'react'
import "./Reasons.css"
import image1 from "../../gymAssets/image1.png"
import image2 from "../../gymAssets/image2.png"
import image3 from "../../gymAssets/image3.png"
import image4 from "../../gymAssets/image4.png"
import nb from "../../gymAssets/nb.png"
import adidas from "../../gymAssets/adidas.png"
import nike from "../../gymAssets/nike.png"
import tick from "../../gymAssets/tick.png"



const Reasons = () => {
  return (
    <div className='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            khkun
        </div>
    </div>
  )
}

export default Reasons