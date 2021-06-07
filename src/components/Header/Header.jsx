import React from 'react'

import {FaSun} from 'react-icons/fa'
import {FaMoon} from 'react-icons/fa'

import { HeaderContainer, HeaderTitle, HeaderSwitch } from './styles.js'

function Header({ themeToggler, theme }) {
    return (
        <HeaderContainer>
            <HeaderTitle>
                <h1>Pomodoro Timer</h1>
            </HeaderTitle>
            <HeaderSwitch>
                <button onClick={themeToggler} className="switch">
                    {theme.title === "light" ? (<FaSun fontSize="2rem" color="#ff9c33" />) : (<FaMoon fontSize="2rem" color="#ff9c33"/>)}
                </button>
            </HeaderSwitch>
        </HeaderContainer>
    )
}

export default Header
