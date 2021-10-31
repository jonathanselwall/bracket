import { useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import { StyledSidebar, Overlay, CloseButton, Content, Team } from './styles'
import { Table, TableHeader, TableBody, Row, Column } from '../Table'
import NumberInput from '../NumberInput'
import { Team as TeamType } from '../../types'

import { teams } from '../../dummy'

import CloseIcon from '../../icons/close.svg'

type SidebarProps = {
  open: boolean
  closeSidebar: () => void
  selected: TeamType[] | null
}

const Sidebar = ({ open, closeSidebar, selected }: SidebarProps) => {
  const closeButtonRef = useRef<null | HTMLButtonElement>(null)

  const handleEscClick = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeSidebar!()
  }

  const filterTeams = (teams: TeamType[]) => {
    if (selected) {
      return teams.filter((team) =>
        selected.find((selectedTeam) => selectedTeam.id === team.id)
      )
    }
    return teams
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscClick, false)
    return () => document.removeEventListener('keydown', handleEscClick, false)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        closeButtonRef.current!.focus()
      }, 300)
    }
  }, [open])

  return (
    <>
      <StyledSidebar open={open}>
        <CloseButton ref={closeButtonRef} onClick={closeSidebar}>
          <CloseIcon />
        </CloseButton>

        <Content>
          <Table>
            <TableHeader>
              <Row>
                <Column as="th">Team</Column>
                <Column as="th">Quarterfinals</Column>
                <Column as="th">Semifinals</Column>
                <Column as="th">Finals</Column>
              </Row>
            </TableHeader>
            <TableBody>
              {filterTeams(teams).map((team) => (
                <Row>
                  <Column>
                    <Team>
                      <img src={team.logo} alt="" />
                      {team.name}
                    </Team>
                  </Column>
                  <Column>
                    <NumberInput value={2} />
                  </Column>
                  <Column>
                    <NumberInput value={2} />
                  </Column>
                  <Column>
                    <NumberInput value={2} />
                  </Column>
                </Row>
              ))}
            </TableBody>
          </Table>
        </Content>
      </StyledSidebar>
      <Overlay open={open} onClick={closeSidebar} />
    </>
  )
}

export default Sidebar
