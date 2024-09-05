import React, { useState } from "react";
import './ktof.css';

function Distance() {
    const [kilometer, setKilometer] = useState(0);
    const [miles, setMiles] = useState(0);
    const [c, setC] = useState(0);
    const [c1, setC1] = useState(0);

    const kilo = (e) => {
        setKilometer(e.target.value);
        cal(e.target.value);
    }

    const mile = (e) => {
        setMiles(e.target.value);
        cal1(e.target.value);
    }

    const cal = (value) => {
        const m =( value * 0.621371).toFixed(2);
        setC(m);
    }

    const cal1 = (value) => {
        const k = (value / 0.621371).toFixed(2);
        setC1(k);
    }

    return (
        <> 
            <div id="con">
           <center>
           <h1>Distance Convetor</h1></center>
           </div>  
           
                <div id="one"> 
             <p><label htmlFor="kilometer">Kilometers To Miles</label><br /> </p> 
                <input type="number" value={kilometer} onChange={kilo} /><br />
                
                <h3> {kilometer} Kilometers is equal for {c} Miles</h3><br />
                </div>
                <br /><br />
                <div id="two" >
              <p> <label htmlFor="miles">Miles To Kilometers</label><br /></p> 
                <input type="number" value={miles} onChange={mile} /><br />
                
                <h3> {miles} Miles is equal for {c1} Kilometers</h3><br />
                </div>
            
        </>
    )
}

export default Distance;