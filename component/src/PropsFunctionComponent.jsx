import React from "react";

function PropsFunctionComponent(props)
{
    return(
        <>
        <h1>Welcome to Credo Systemz. Hi {props.Name}</h1>
        <h2>Today Topics - {props.Topics}</h2>

        <p>12+12</p>
        <p>{12+12}</p>
        </>
    )
}

export default PropsFunctionComponent