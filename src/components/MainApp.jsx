import React, { Component } from "react";
import Container from "./Container";
import Axios from "axios";

class MainApp extends Component {
    state = {
        list: [],
        filtered: [],
        direction: false,
        sortBy: ""
    };

    sortData = (e) => {
        const TC = e.target.textContent
        this.setState({
            filtered: this.state.filtered.sort((a, b) => a[TC] > b[TC] ? 1 : -1)
        })
    }

    handleInputChange = (text) => this.setState({
        filtered: this.state.list.filter(x => Object.values(x).map(x => x.toLowerCase()).some(x => x.includes(text)))
    })

    componentDidMount() {
        Axios.get("https://randomuser.me/api?results=25")
            .then(res => {
                // console.log(res.data.results)
                const mapped = res.data.results.map(e => ({
                    "Profile": e.picture.thumbnail,
                    "First Name": e.name.first,
                    "Last Name": e.name.last,
                    "Phone": e.phone,
                    "Email": e.email
                }))
                this.setState({ list: mapped, filtered: mapped })
            })
    }

    render() {

        return (
            <Container handleInputChange={this.handleInputChange}>

                {
                    !!this.state.filtered.length && <table className="table table-striped">
                        <thead>
                            <tr>
                                {
                                    Object.keys(this.state.filtered[0]).map((k, i) => <td key={i + "-col"} onClick={this.sortData}><button>{k}</button></td>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.filtered.map((r, i) => <tr key={i + '-row'}>
                                    {
                                        Object.values(r).map((c, i) => <td key={i + "-cell"}>
                                            {i ? c : <img src={c} alt="" />}
                                        </td>)
                                    }
                                </tr>)
                            }
                        </tbody>
                    </table>
                }

            </Container>
        )
    }
}

export default MainApp