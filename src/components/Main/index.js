import React from 'react';
import CountrySelect from '../Search/countrySelect.js';
import OrganizationSearch from '../Search/organizationSearch.js';
import OrganizationServes from '../Search/organizationServes.js'
import ButtonSearch from '../Search/buttonSearch';
import { Container, Search } from './styles.js';

export default function Main() {
    return (
        <>
            <Container>
                <h1>
                    <p>You can change the world.</p>
                    <p>DONATE gives you all the tools to do it</p>
                </h1>
                <Search>
                    <OrganizationSearch />
                    <CountrySelect />
                    <OrganizationServes />
                    <ButtonSearch />
                </Search>
            </Container>
        </>
    );
}