import React from "react";

function EmployeeList(props) {

    return (
        <tbody>
            {props.result.map(item => (
                <tr key={item.login.salt} >
                    <td><img alt={item.name.first} src={item.picture.thumbnail} /></td>
                    <td>{item.name.first} {item.name.last} </td>
                    <td>{item.cell}</td>
                    <td>{item.email}</td>
                    <td>{item.dob.date}</td>
                </tr>
            ))}

        </tbody>
    );
}
export default EmployeeList;