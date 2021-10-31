import { createContext, useContext, useState, useCallback } from 'react'
import { AppContextProps } from './types'
import { Team } from '../types'

const AppContext = createContext<AppContextProps | undefined>(undefined)

const AppProvider = ({ children }: { children: any }) => {
  const [sidebar, setSidebar] = useState<boolean>(true)
  const [selected, setSelected] = useState<Team[] | null>(null)

  const toggleSidebar = useCallback(
    (visible) => {
      if (visible) return setSidebar(visible)
      return setSidebar(!sidebar)
    },
    [sidebar]
  )

  const value = {
    selected,
    setSelected,
    sidebar,
    toggleSidebar,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useAppState = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useBracket must be used within a AppContext.Provider')
  }

  return context
}

export { AppProvider, useAppState }
