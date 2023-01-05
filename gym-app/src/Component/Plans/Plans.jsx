import React from 'react'
import "./Plans.css"
import { plansData} from "../../Data/Plans"
import whiteTick from "../../gymAssets/whiteTick.png"
const Plans = () => {
  return (
    <div className='plans-Container'>
        <div className='programes-header'>
            <span className='strock'>READY TO START</span>
            <span>YOUR JOURNY</span>
            <span className='strock'>NOW WITH US</span>
        </div>

        <div className="plans">
            {plansData.map((el,i)=>(
                <div className='plan' key={i}>
                    {el.icon}
                    <span>{el.name}</span>
                    <span> $ {el.price}</span>

                    <div className="features">
                        {el.features.map((el,i)=>{
                            return(
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{el}</span>
                                </div>   
                            )
                        })}
                    </div>
                    <div>
                        <span>
                            See More Benifitis ->
                        </span>
                    </div>
                    <button className='btn'>JOIN NOW</button>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Plans