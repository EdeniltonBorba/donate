import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ContainerStyle } from '../Grid/Styles.js';

export default function GridContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <ContainerStyle />
            </Container>
        </React.Fragment>
    );
}