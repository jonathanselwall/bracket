import { Team } from '../types'

export interface AppContextProps {
  sidebar: boolean
  toggleSidebar: (visible?: boolean) => void
  setSelected: (teams: Team[]) => void
  selected: Team[] | null
}
