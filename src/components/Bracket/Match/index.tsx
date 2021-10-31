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

const emptyTeam = {
  id: '',
  name: 'TBD',
  logo: '',
  score: 0,
}

const Match = ({ playing, teams, winner }: MatchProps) => {
  const { handleEditClick } = useBracket()

  const setTeamsData = () => {
    if (teams.length === 1) return [emptyTeam, ...teams]
    return teams
  }

  return (
    <>
      <StyledMatch tabIndex={0}>
        <EditContainer>
          <EditButton
            aria-label="Edit tournament"
            onClick={() => handleEditClick(teams)}
          >
            <EditIcon />
          </EditButton>
        </EditContainer>
        <Content>
          {playing && <Playing>Playing</Playing>}
          {setTeamsData()!.map(({ id, logo, name, score }) => (
            <Team
              id={id}
              name={name}
              logo={logo}
              score={score}
              winner={winner === id}
            />
          ))}
        </Content>
      </StyledMatch>
    </>
  )
}

Match.defaultProps = {
  teams: [emptyTeam, emptyTeam],
}

export default Match
