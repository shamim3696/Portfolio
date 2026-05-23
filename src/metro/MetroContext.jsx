import React, { createContext, useContext, useState, useRef, useCallback } from 'react'

const Ctx = createContext(null)

export function MetroProvider({ children }) {
  const [currentStation, setCurrentStation] = useState('home')
  const [targetStation,  setTargetStation]  = useState('home')
  const [isMoving,       setIsMoving]        = useState(false)
  const trainZRef = useRef(0)

  const navigate = useCallback((id) => {
    if (isMoving || id === currentStation) return
    setTargetStation(id)
    setIsMoving(true)
  }, [isMoving, currentStation])

  return (
    <Ctx.Provider value={{
      currentStation, setCurrentStation,
      targetStation,
      isMoving, setIsMoving,
      trainZRef,
      navigate,
    }}>
      {children}
    </Ctx.Provider>
  )
}

export const useMetro = () => useContext(Ctx)
