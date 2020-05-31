import React, { Component } from 'react';
import API from '../../utils/API';
import ButtonSearch from '../../components/Search/buttonSearch.js';


class Board extends Component {
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

    render() {
        return (
            <React.Fragment>
                <ButtonSearch
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />
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
}
export default Board;