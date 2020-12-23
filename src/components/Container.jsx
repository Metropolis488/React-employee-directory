import React from "react"

function Container(props) {

    return (
        <div className={'container-fluid'}>
            <div className="jumbotron bg-primary">
                <h1>Employee Directory</h1>
                <input
                    type="text"
                    onChange={e => props.handleInputChange(e.target.value.toLowerCase())}
                />
            </div>
            <h5>Click a button to sort by that column</h5>
            {props.children}

        </div>
    )
}

export default Container