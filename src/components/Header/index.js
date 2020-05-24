import React from 'react';
import { HeaderStyle } from './styles.js';
import Logo from '../Logo/index.js';

function Header() {
    return (
        <div>
            <HeaderStyle>
                <Logo />
            </HeaderStyle>
        </div>

    );
}

export default Header;
