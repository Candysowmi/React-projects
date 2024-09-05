import React,{useState} from "react";
import './Money.css';

const CurencyConvetor =()=>{
    const[Curency, setCurency]=useState();
    const[US, setUS]=useState();
    const[Euro, setEuro]=useState();
    const[Dirham , setDirham ]=useState();
    const[Singapore, setSingapore]=useState();
    
    const Calculate =()=>{
       
        const US= Curency*(0.012);
        setUS(US.toFixed(2));
        const Euro=Curency*(0.011);
        setEuro(Euro.toFixed(2));
        const Dirham= Curency*(0.044);
        setDirham(Dirham.toFixed(2));
        const Singapore=Curency*(0.016);
        setSingapore(Singapore.toFixed(2));
        

    }

 return(
        <div className="all">
            <h1>Curency Convetor</h1> <hr /> <br />
            <label>Amount (₹):</label><br />
            <input 
                id="Curency" 
                type="number"
                placeholder="Enter Your Amount"
                value={Curency}
                onChange={(e) => setCurency(e.target.value)} 
                required /> <br /><br />
               
        <button onClick={Calculate}>Calculate</button> <br /><br />
        {/* <button onclick={clear}>Clear</button> */}
        <div className="ans"> 
        {/* <h2>Converted Amount</h2> */}
        <>
        {US && <p> US Doller ($): {US}</p>} 
        {Euro && <p> Euro (€): {Euro}</p>} 
        {Dirham && <p> Dirham (د): {Dirham}</p>} 
        {Singapore && <p> Singapore Doller ($): {Singapore}</p>} 
        </>
        </div>
    </div>
    );

};
export default CurencyConvetor

