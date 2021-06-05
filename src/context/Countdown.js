import React, { createContext, useContext, useState } from 'react'

const CountdownContext = createContext()

export default function CountdownProvider({ children }){
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)

    return (
        <CountdownContext.Provider value={{time, setTime, isActive, setIsActive}}>
            {children}
        </CountdownContext.Provider>
    )
}

export function useCountdown(){
    const context = useContext(CountdownContext)
    const { time, setTime, isActive, setIsActive } = context
    return { time, setTime, isActive, setIsActive }
}