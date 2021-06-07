import "./App.css";
import GlobalStyle from './styles/global'

import Header from "./components/Header/Header";
import Actions from "./components/Actions/Actions";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import AlarmModal from "./components/AlarmModal/AlarmModal";

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { ThemeProvider } from 'styled-components'
import CountdownProvider from "./context/Countdown";

import React, { useEffect, useState } from 'react'

function App() {

  Notification.requestPermission()

  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem("theme")
    if(storageValue){
      return JSON.parse(storageValue)
    } else {
      return light
    }
  });

  const themeToggler = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
    <CountdownProvider>
      <div className="app">
        <GlobalStyle />
        <Header themeToggler={themeToggler} theme={theme}/>
        <Actions />
        <AlarmModal />
        <CountdownTimer />
      </div>
    </CountdownProvider>
    </ThemeProvider>
  );
}

export default App;
