import React from "react";

class StateClassComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={Message:"Welcome to Credo Systemz"}
    }

    ChangeContent=()=>{
        this.setState({Message:"Thank You for Visitng Credo Systemz. All the best"})
    }

    render()
    {
        return(
            <>
            <h1>State Value - {this.state.Message}</h1>
            <button onClick={this.ChangeContent}>Change the Content</button>
            </>
        )
    }


}
export default StateClassComponent