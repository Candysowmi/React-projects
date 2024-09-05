import { useState } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [ans, setAns]= useState();

  const evenodd=()=>{
    if(number%2==0){
      setAns("even");

    }
    else{
      setAns("odd");
    }
  }
  return (
    <>
      <div>
            <h1>ODD OR EVEN NUMBER</h1>
            <input type="number"
                    value={number}
                    placeholder='Enter the value'
                    onChange={(e)=> setNumber (e.target.value)} 
                    required/> <br /> <br />
                    <button onClick={evenodd}> click </button><br />
                     <p>The Number is:{ans}</p>
        </div>
    </>
  )
}

export default App
