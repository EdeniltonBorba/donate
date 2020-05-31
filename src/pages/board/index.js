import React, { useState } from 'react';
import { query } from 'express';
import API from '../../utils/API';


export default function Board() {
    state = {
        result: {},
        search: ""
    };

    searchProject = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchProject(this.state.search);
    };

    return (
        <React.Fragment>
            <h3>Result</h3>
            <hr />
            <ul>
                <li>Organization name</li>
                <li>Organizations home country</li>
                <li>Countries the organization serves</li>
            </ul>
        </React.Fragment>
    );
}
