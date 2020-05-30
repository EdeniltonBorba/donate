import React, { useState } from 'react';
import axios from 'axios';

export default function Board() {
    const [country, setCountry] = useState(false);

    let getCountry = async () => {
        let res = await axios.get("https://api.globalgiving.org/api/public/projectservice/countries/{iso3166CountryCode}/projects", {
            params: {
                appid: process.env.REACT_APP_OPEN_GLOBALGIVING_KEY,
                lang: "pt"
            }
        });
        setCountry(res.data);
    }
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
