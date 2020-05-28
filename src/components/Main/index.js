import React from 'react';
import CountrySelect from '../Search/countrySelect.js';
import OrganizationSearch from '../Search/organizationSearch.js';

export default function Main() {
    return (
        <>

            <h1>You can change the world.</h1>
            <h1>DONATE gives you all the tools to do it</h1>
            <CountrySelect />
            <CountrySelect />
            <OrganizationSearch />

        </>
    );
}