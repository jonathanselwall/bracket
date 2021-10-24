import {
  StyledMatch,
  Playing,
  EditContainer,
  EditButton,
  Content,
} from './styles'

import { Team as TeamType } from '../../../types'
import Team from '../Team'

import EditIcon from '../../../icons/edit.svg'

import { useBracket } from '../context'

type MatchProps = {
  playing?: boolean
  winner?: string
  teams: TeamType[]
}

const Match = ({ playing, teams, winner }: MatchProps) => {
  const { handleEditClick } = useBracket()
  return (
    <>
      <StyledMatch tabIndex={0}>
        <EditContainer>
          <EditButton aria-label="Edit tournament" onClick={handleEditClick}>
            <EditIcon />
          </EditButton>
        </EditContainer>
        <Content>
          {playing && <Playing>Playing</Playing>}
          {teams!.map(({ id, logo, name }) => (
            <Team id={id} name={name} logo={logo} winner={winner === id} />
          ))}
        </Content>
      </StyledMatch>
    </>
  )
}

export default Match
