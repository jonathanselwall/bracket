import { createContext, useContext, useState } from 'react'
import { BracketProps } from './types'

interface BracketContextProps extends BracketProps {
  setHover: (id: string | null) => void
  hover: string | null
}

interface Props extends BracketProps {
  children: React.ReactNode
}

const BracketContext = createContext<BracketContextProps | undefined>(undefined)

const BracketProvider = ({ handleEditClick, children }: Props) => {
  const [hover, setHover] = useState<string | null>(null)

  const populatedValues = {
    handleEditClick,
    hover,
    setHover,
  }

  return (
    <BracketContext.Provider value={populatedValues}>
      {children}
    </BracketContext.Provider>
  )
}

const useBracket = () => {
  const context = useContext(BracketContext)

  if (context === undefined) {
    throw new Error('useBracket must be used within a BracketContext.Provider')
  }

  return context
}

export { BracketProvider, useBracket }
