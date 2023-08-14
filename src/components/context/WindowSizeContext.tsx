import { createContext, useContext, useState } from "react"

type WindowSizeProviderProps = {
  children: React.ReactNode
}

type WindowSizeContextValues = {
  isMobile: boolean
}

const WindowSizeContext = createContext({} as WindowSizeContextValues);

export const getWindowSize = () => {
  return useContext(WindowSizeContext);
}

export const WindowSizeProvider = ({children}: WindowSizeProviderProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  return (
    <WindowSizeContext.Provider
      value={{isMobile}}
    >
      {children}
    </WindowSizeContext.Provider>
  )
}