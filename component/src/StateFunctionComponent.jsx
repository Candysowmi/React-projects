import React, {useState} from "react";

function StateFunctionComponent()
{
    const [msg, setMsg]=useState("Hi Welcome to Credo Systemz")

    return(
        <>
        <h1>State Value - {msg}</h1>
        <button onClick={()=>setMsg("Thanks You")}>Change the Content</button>
        </>
    )

}
export default StateFunctionComponent


// import React, {useState} from "react";

// function StateFunctionComponent()
// {
//     const [count, setCount]=useState(0)

//     return(
//         <>
//         <h1>Counter App - Function Component using useState Hook</h1>

//         <h2>{count}</h2>
//         <p>
//             <button onClick={()=>setCount(count+1)}>+</button>
//             <button onClick={()=>setCount(0)}>Reset</button>
//             <button onClick={()=>setCount(count-1)}>-</button>
//         </p>
//         </>
//     )

// }
// export default StateFunctionComponent

// import React, {useState} from "react";

// export default function StateFunctionComponent()
// {
//     const [user, setUser]=useState("")

//     return(
//         <>
//         <h1>Welcome {user}</h1>

//         <form>
//             <label>Enter the Name: </label>

//             <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
//         </form>
//         </>
//     )

// }
