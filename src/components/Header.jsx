import React from 'react'
import {FaSun} from 'react-icons/fa'
import {FaMoon} from 'react-icons/fa'
import { useState } from 'react'
import './Header.css'

function Header() {

    const [darkTheme, setDarkTheme] = useState(false);
    
    return (
        <div className="header">
            <div className="title">
                <h1>Pomodoro Timer</h1>
            </div>
            <div className="theme-switcher">
                <button onClick={() => setDarkTheme(!darkTheme)} className="switch">
                    {!darkTheme ? (<FaSun fontSize="2rem" color="#f5d056" />) : (<FaMoon fontSize="2rem" color="#cccac8"/>)}
                </button>
            </div>
        </div>
    )
}

export default Header
