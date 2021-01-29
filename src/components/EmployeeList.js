import React from "react";
import dayjs from "dayjs";

function EmployeeList(props) {
    console.log(props.result)
    return (
        <tbody>
            {props.result.map(item => (
                <tr key={item.login.uuid} >
                    <td><img alt={item.name.first} src={item.picture.thumbnail} /></td>
                    <td>{item.name.first} {item.name.last} </td>
                    <td>{item.cell}</td>
                    <td>{item.email}</td>
                    <td>{dayjs(item.dob.date).format("MM/DD/YYYY")}</td>
                </tr>
            ))}

        </tbody>
    );
}
export default EmployeeList;