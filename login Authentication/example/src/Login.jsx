import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');

    const name="sowmiya";
    const passkey="sowmi";
    const nav=useNavigate();

    const login=()=>{
        if(name===uname && password===passkey){
            
                nav (`/Todo`);

            
        }
        else{
            alert ("enter correct username and password");
        }

    } 

  return (
    <div className='login'>
        <h2>LOGIN</h2> <hr />
        <label>User Name :</label><br />
        <input type="text" 
        id='text'
                placeholder='Enter your Name'
                onChange={(e)=> setUname(e.target.value)} 
                required/> <br /> <br />

        <label>Password :</label><br />
        <input type="password" 
        id="password"
                placeholder='Enter your password'
                onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />

                <button onClick={login}>login</button><br />
                <Link to="/signin"> way to sign in</Link>
    </div>
  )
}

export default Login