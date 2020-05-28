import React from 'react';
import GlobalStyle from '../../styles/global.js';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { Container } from "./styles.js";

export default function Home() {
    return (
        <>
            <Container>
                <Header />
                <Main />
                <GlobalStyle />
            </Container>
        </>
    );
}
