import React from "react";

function SearchForm(props) {
    return (
        <div className="d-flex justify-content-center mt-3">
            <input
                type="text"
                placeholder="Search"
                onChange={props.handleInputChange}
                value={props.search}
            />
        </div>
    )
}

export default SearchForm;