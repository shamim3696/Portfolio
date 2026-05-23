import React, { createContext, useContext, useState, useRef } from 'react'

const Ctx = createContext(null)

export function DetectiveProvider({ children }) {
  const [section,  setSection]  = useState('home')
  const [phase,    setPhase]    = useState('intro') // 'intro' | 'entering' | 'active'
  const camTargetRef = useRef({ x: 0, y: 3.5, z: 13 })

  return (
    <Ctx.Provider value={{ section, setSection, phase, setPhase, camTargetRef }}>
      {children}
    </Ctx.Provider>
  )
}

export const useDetective = () => useContext(Ctx)
