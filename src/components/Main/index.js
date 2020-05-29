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
                <div>
                    <h1>You can change the world.</h1>
                    <h1>DONATE gives you all the tools to do it</h1>
                </div>
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