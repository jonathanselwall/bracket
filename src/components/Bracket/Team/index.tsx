import { StyledTeam, Container, Information, Points } from './styles'
import { Team as TeamType } from '../../../types'
import { useBracket } from '../context'

interface TeamProps extends TeamType {
  winner?: boolean
  score?: number
}

const Team = ({ winner, ...team }: TeamProps) => {
  const { setHover, hover } = useBracket()

  return (
    <StyledTeam
      winner={winner}
      onMouseOver={() => setHover(team.id)}
      onMouseLeave={() => setHover(null)}
      isHovered={team.id === hover}
    >
      <Container>
        <Information>
          <img className="team-logo" src={team.logo} alt="" />
          <span className="team-name">{team.name}</span>
        </Information>

        <Points>{team.score || '--'}</Points>
      </Container>
    </StyledTeam>
  )
}

export default Team
