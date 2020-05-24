import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../components/Logo/index.js';
import Header from '../../components/Header/index.js';

function Home() {
    return (
        <React.Fragment>
            <Header>
                <Toolbar>
                    <Logo />
                </Toolbar>
            </Header>
        </React.Fragment>
    );
}

export default Home;
