import React,{useState} from "react";
import './compound.css';

const CompoundInterest =()=>{
    const[Principal, setprincipal] = useState();
    const[Time, settime] = useState();
    const[Rate, setrate] = useState();
    const[CompoundInterest, setci] = useState();

    const calculateCI =()=>{
        const Amount=(Principal*(1+Rate/100)**Time);
        const answer=Amount-Principal;
        setci(answer.toFixed(2));
};
return(
        <div className="all">
            <h2>Compound Interest Calculator</h2> <hr />

            <label>Principal Amount(RS):</label> <br />
            <input 
                id="Principal" 
                type="number"
                placeholder="Principal Amount"
                value={Principal} 
                onChange={(e) => setprincipal(e.target.value)}
                required /> <br /> <br />
                     
            <label>Number Of Times(n):</label><br />
            <input 
                id="Time" 
                type="number"
                placeholder="Time"
                value={Time}
                onChange={(e) => settime(e.target.value)}
                required /><br /><br /> 

             <label>Rate Of Interest(%):</label><br />
             <input 
               id="Rate" 
               type="number" 
               placeholder="Rate" 
               value={Rate}
               onChange={(e) => setrate(e.target.value)}
               required /> <br /> <br />    

             <button onClick={calculateCI}>Calculate</button>  <br /> <br />

            {CompoundInterest && <p> Compound Interest: {CompoundInterest}</p>}    

        </div>
    );

};
export default CompoundInterest