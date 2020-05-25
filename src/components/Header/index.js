import React from 'react';
import { HeaderStyle, IconStyle } from './styles.js';
import Logo from '../Logo/index.js';

function Header() {
    return (
        <div>
            <HeaderStyle>
                <Logo />
                <IconStyle />
            </HeaderStyle>
        </div>

    );
}

export default Header;

