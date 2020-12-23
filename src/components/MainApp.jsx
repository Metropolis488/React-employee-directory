// import React, { Component } from "react";
// import Container from "./Container";
// import Results from "./Results"
// import Axios from "axios";

// class MainApp extends Component {
//     state = {
//         list: [],
//         filtered: []
//     };

//     sortData = () => {
//         console.log("Hello")
//         const ordered = [...this.state.list]
//         ordered.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
//         this.setState({
//             list: ordered
//         })
//     }

//     nameFilter = () => {
//         console.log("trying to filter")
//         // nUpdate
//     }

//     handleInputChange = (text) => {
//         console.log(text)
//         const filtered = [...this.state.list]
//         const matches = filtered.name.last.filter(s => s.includes(text))
//         console.log(matches)
//         // console.log(nUpdate)
//         // const filteredNames = nUpdate.filter(el => el.toLowerCase().indexOf(text.toLowerCase()) !== -1);
//         // console.log(filteredNames)  
//         // this.nameFilter(event.target.value)
//     }

//     componentDidMount() {
//         console.log("hello")
//         Axios.get("https://randomuser.me/api?results=25")
//             .then(res => {
//                 const mapped = res.data.results.map(e => ({
//                     firstName: e.name.first,
//                     lastName: e.name.last
//                 }))

//                 console.log(mapped)
//                 console.log(res.data.results)
//                  // this.setState({ list: res.data.results })
//                 // console.log(this.state.list)
//             })
//     }

//     render() {
//         console.log("I have rendered")
//         return (
//             <Container handleInputChange={this.handleInputChange}>

//                 <Results list={this.state.list} updatedState={this.sortData}
//                 //   handleFormSubmit={handleFormSubmit}
//                 />
//             </Container>
//         )
//     }
// }

// export default MainApp

// //  render() {
// //         console.log("I have rendered");
// //         const roles = {this.state.list}
// //         return {roles.map(p =>
// //                 <Results
// //                 first={p.name.first}
// //                 last={p.name.last}
// //                 img={p.picture.large}
// //                 dob={p.dob.date}
// //                 email={p.email}
// //                 phone={p.phone}
// //                 />)}
// //             }
// //     }
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

    // sortData = ({ target: { textContent: TC } }) => {
    sortData = (e) => {
        const TC = e.target.textContent
        this.setState({
            filtered: this.state.filtered.sort((a, b) => a[TC] > b[TC] ? 1 : -1)
        })
    }

    handleInputChange = (text) => this.setState({
        filtered: this.state.list.filter(x => Object.values(x).map(x => x.toLowerCase()).some(x => x.includes(text)))
    })

    _handleInputChange = (text) => {
        const filtered = [];

        for (const x of this.state.list) {
            const values = Object.values(x);

            const lowerCase_values = []
            for (const value of values) {
                lowerCase_values.push(value.toLowerCase())
            }

            let hasSubString = false;
            for (const value of lowerCase_values) {
                if (value.includes(text)) {
                    hasSubString = true;
                    break;
                }
            }

            if (hasSubString) filtered.push(x)
        }

        this.setState({ filtered })
    }


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


const obj = {
    "first name": "Ben",
    pets: true,
    age: 32
}

// console.log(obj["first name"])
// Object.keys(obj).map(x => console.log(x))
// console.log(Object.values(obj))

for(const key in obj){
    console.log(key, obj[key])
}