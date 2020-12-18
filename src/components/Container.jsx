import React from "react"

function Container(props) {
    return <div className={'container-fluid'}>
        <div className="jumbotron bg-primary">
            <h1>Employee Directory</h1>
            <input />
        </div>
        {props.children}
        
        
        </div>
}

export default Container