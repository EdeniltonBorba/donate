import React from 'react';
import axios from 'axios';

export default function Board() {
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
