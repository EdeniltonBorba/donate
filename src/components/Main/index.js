import React from 'react';
import CountrySelect from '../Search/countrySelect.js';
import OrganizationSearch from '../Search/organizationSearch.js';
import { Container } from './styles.js';

export default function Main() {
    return (
        <>
            <Container>
                <h1>You can change the world.</h1>
                <h1>DONATE gives you all the tools to do it</h1>
                <CountrySelect />
                <CountrySelect />
                <OrganizationSearch />
            </Container>
        </>
    );
}