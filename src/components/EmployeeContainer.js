import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

import Api from "../utils/Api";
import EmployeeTable from "./EmployeeTable"

class EmployeeContainer extends Component {
    state = {
        result: [],
        search: "",
        isClicked: false
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

    handleSort = () => {

        let arr = this.state.result;
        if (!this.state.isClicked) {
            arr.sort(function (a, b) {

                let nameA = a.name.first.toUpperCase();
                let nameB = b.name.first.toUpperCase();
                if (nameA > nameB) {
                    return 1;
                } else {
                    return -1;
                }

            })
            this.setState({
                results: arr,
                isClicked: true
            })
        } else {
            arr.sort(function (a, b) {

                let nameA = a.name.first.toUpperCase();
                let nameB = b.name.first.toUpperCase();
                if (nameA > nameB) {
                    return -1;
                } else {
                    return 1;
                }

            })
            this.setState({
                results: arr,
                isClicked: false
            })

        }
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

                <EmployeeTable handleSort={this.handleSort} result={this.state.result} />
            </div>
        )
    }
}


export default EmployeeContainer