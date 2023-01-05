import React from 'react'
import "./Programes.css"
import {programsData} from "../../Data/Progarmes"
import RightArrow from "../../gymAssets/rightArrow.png"
const Programes = () => {
  return (
    <div className='programes' id='Program'>
        <div className="programes-header">
            <span className='strock'>Explor Our</span>
            <span>Programes</span>
            <span className='strock'>to shape you</span>
        </div>

        <div className="programes-categories">
        {
            programsData.map((el)=>{
                return(
                    <div className="categories">
                        {el.image}
                        <span>{el.heading}</span>
                        <span>{el.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                )
            })
        }



        </div>






    </div>
  )
}

export default Programes 