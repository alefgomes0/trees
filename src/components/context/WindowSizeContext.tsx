import { createContext, useContext, useState } from "react"

type WindowSizeProviderProps = {
  children: React.ReactNode
}

const WindowSizeContext = createContext({});

export const getWindowSize = () => {
  return useContext(WindowSizeContext);
}

export const WindowSizeProvider = ({children}: WindowSizeProviderProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
}