import React from "react";
import Moment from "react-moment";

function Results(props) {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map(person => 
                    <tr key={person.name.first + person.name.last}>                            
                        <td><img alt={person.name.first} className="img-fluid" src={person.picture.large} /></td>
                        <td>{person.name.first} {person.name.last}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td><Moment format="MM/DD/YYYY">{person.dob.date}</Moment></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}


// function Results(props) {
//     return (
//         <ul className="list-group">
//             {props.list.map(person => (
//                 <li className="list-group-item" key={person.name.first + person.name.last}>
//                     <img alt={person.name.first} className="img-fluid" src={person.picture.large} />
//                     <p>{person.name.first}</p>
//                 </li>
//             ))}
//         </ul>
//     )
// }

export default Results;