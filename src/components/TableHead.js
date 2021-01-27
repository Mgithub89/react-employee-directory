
import React from "react";

function TableHead() {
    return (

        <table className="container text-center table bg-dark text-white mx-5  mt-3">
            <thead>
                <tr className="text-center">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>

        </table>
    )
}

export default TableHead;