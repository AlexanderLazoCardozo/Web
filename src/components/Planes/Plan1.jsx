import React from 'react'
import FONDO4 from "./../../images/FONDO4.png"
import Plan30mb from "./../../images/Plan30mb.svg"

const Plan1 = () => {
  return (
    <>
    <div>
        <div style={{height:"1000px"}}>
            <img style={{position:"absolute",width:"100%"}} src={FONDO4} />
            <div style={{position:"absolute"}}>
                <img style={{width:"100%", marginLeft:"100px"}} />
                <img style={{width:"100%", textAlign:"center"}} src={Plan30mb} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Plan1