import React from 'react';
import { HeaderStyle, IconStyle, } from './styles.js';
import Logo from '../Logo/index.js';
import GridContainer from '../Grid/GridContainer.js';

function Header() {
    return (
        <div>
            <GridContainer>
                <HeaderStyle>
                    <Logo />
                    <IconStyle />
                </HeaderStyle>
            </GridContainer>
        </div>

    );
}

export default Header;

