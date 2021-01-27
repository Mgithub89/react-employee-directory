import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import TableHead from "./TableHead";


class EmployeeContainer extends Component {
    state = {
        result: [],
        search: ""
    }
    render() {
        return (
            <div>
                <Navbar />
                <SearchForm />
                <TableHead />
            </div>
        )
    }
}


export default EmployeeContainer