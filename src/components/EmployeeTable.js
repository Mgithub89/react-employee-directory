import React from "react";
import EmployeeList from "./EmployeeList";
import TableHead from "./TableHead";

function EmployeeTable(props) {
    return (
        <table className="container text-center table bg-dark text-white mx-5  mt-3">
            <TableHead handleSort={props.handleSort} />

            <EmployeeList result={props.result} />
        </table>
    )
}

export default EmployeeTable;