
import React from "react";

function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th><button onClick={props.handleSort}>Name</button></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>


    )
}

export default TableHead;