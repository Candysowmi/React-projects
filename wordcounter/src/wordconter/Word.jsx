import React,{useState} from "react";
import './word.css';
function Wordcounter(){
    const[Letter,setletter]= useState();
    const [answer,setanwer]=useState(0);
    const [answer1,setanwer1]=useState(0);


  const result=()=>{
        const length=Letter.length;
        setanwer(length); 
        const words = Letter.trim().split(/\s+/).filter(Boolean);
    setanwer1(words.length);

    }
    const clear=()=>{
        setanwer(0);setanwer1(0);setletter("");
    }
       

return(
    
    <div className="all">
        <h2> Word and Letter Counter</h2> <hr />
        <label>Enter the Text:</label><br />
        <input type="text"
                id="Letter"
                placeholder="Enter The Text here...."
                value={Letter}
                onChange={(e)=> setletter(e.target.value)}
                required /> <br />
              {/* <br /> */}
                <button onClick={result} id="b1"> Click</button><button onClick={clear} id="b2">Clear</button>
                <h3>LETTER COUNT : {answer}</h3>
                <h3>WORD COUNT   : {answer1}</h3>
    </div>
)
}
export default Wordcounter