import { useState } from 'react';
import './App.css'

function App() {
  const [birthYear, setBirthYear] = useState();
  const [age, setAge] = useState();

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    console.log(currentYear)
    const calculatedAge = currentYear - birthYear;
    console.log(calculateAge)
    setAge(calculatedAge);
  };

  return (
    <>
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthYear">Enter your birth year: </label>
      <input
        type="number"
        id="birthYear"
        value={birthYear}
        onChange={(e) => setBirthYear(Number(e.target.value))}
      />
      <button onClick={calculateAge}>Calculate</button>
      {/* {age > 0 && <p>Your age is {age} years.</p>} */}

      <h1>Age - {age}</h1>
    </div>
   
    </>
  )
}

export default App
