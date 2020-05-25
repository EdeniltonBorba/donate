import React from 'react';
import Header from '../../components/Header/index.js';
import { BodyStyle } from './styles';

function Home() {
    return (
        <React.Fragment>
            <BodyStyle />
            <Header />
        </React.Fragment>
    );
}

export default Home;
