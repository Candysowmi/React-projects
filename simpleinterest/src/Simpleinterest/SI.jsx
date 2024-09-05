import React, {useState} from "react";
import './SI.css';

const SimpleInterest = () =>{
    const[Principal, setprincipal] = useState();
    const[Time, settime] = useState();
    const[Rate, setrate] = useState();
    const[SimpleInterest, setsi] = useState();

    const calculateSI =()=>{
        const answer= ((Principal)*(Time)*(Rate))/100;
        setsi(answer.toFixed(2));
    };

return(
    <div className="all"> 
        <h2>Simple Interest Calculator</h2>
        
        <label>Principal Amount:</label><br />
        <input 
            id="Principal"
            type="number"
            placeholder="Principal amount" 
            value={Principal}
            onChange={(e) => setprincipal(e.target.value)}
            required /> <br /> <br />

        
        <label>Time:</label><br />
        <input 
            id="Time" 
            type="number"
            placeholder="Time"
            value={Time}
            onChange={(e) => settime(e.target.value)}
            required /><br /><br />

        <label>Rate:</label><br />
        <input 
            id="Rate" 
            type="number" 
            placeholder="Rate" 
            value={Rate}
            onChange={(e) => setrate(e.target.value)}
            required /> <br /> <br />

        <button onClick={calculateSI}>Calculate</button>  <br /> <br />

        {SimpleInterest && <p> Simple Interest: {SimpleInterest}</p>} 

    </div>
);
};


export default SimpleInterest