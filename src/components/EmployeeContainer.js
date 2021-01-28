import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import TableHead from "./TableHead";
import Api from "../utils/Api";
import EmployeeTable from "./EmployeeTable"


import EmployeeList from "./EmployeeList";

class EmployeeContainer extends Component {
    state = {
        result: [],
        search: ""
    }

    // when component mounts, make api call to populate UI
    componentDidMount() {
        this.searchRandomEmployee();
    }

    searchRandomEmployee = () => {
        Api.search()
            .then(res => {
                this.setState({ result: res.data.results })
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
    };

    render() {
        return (
            <div>
                <Navbar />
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <EmployeeTable result={this.state.result} />
            </div>
        )
    }
}


export default EmployeeContainer