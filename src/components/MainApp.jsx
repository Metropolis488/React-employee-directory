import React, { Component } from "react";
// import Container from "./Container";
import Results from "./Results"
import Axios from "axios";

class MainApp extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        console.log("hello")
        Axios.get("https://randomuser.me/api?results=25")
        .then(res => {
            this.setState({ list: res.data.results })
            console.log(this.state.list[0].dob.date)
        })
        
    }

    render() {
        console.log("I have rendered")
        return (
          <Results list={this.state.list} />
        )
    }

    
}

export default MainApp