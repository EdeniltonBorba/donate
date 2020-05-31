import React, { useState } from 'react';


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
