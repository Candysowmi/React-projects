import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signin = () => {
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const nav=useNavigate();

    const Signin=()=>{
        if(password===cpassword){
            nav(`/`);

        }
        
    }
  return (
    <div className='signin'>
        <h2>LOGIN</h2> <hr />
        <label>User Name :</label><br />
        <input type="text" 
        id='text'
                placeholder='Enter your Name'
                onChange={(e)=> setUname(e.target.value)} /> <br /> <br />

        <label>Password :</label><br />
        <input type="password" 
        id="password"
                placeholder='Enter your Name'
                onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />

                <label>Conform Password :</label><br />
        <input type="password" 
        id="password"
                placeholder='Enter your Name'
                onChange={(e)=>setCPassword(e.target.value)} /> <br /> <br />

                <button onClick={Signin}>Sign in</button>
    </div>
  )
}

export default Signin