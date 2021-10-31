import { StyledTeam, Container, Information, Points } from './styles'
import { Team as TeamType } from '../../../types'
import { useBracket } from '../context'

interface TeamProps extends TeamType {
  winner?: boolean
  score?: number
}

const handleScore = (score: number | undefined) => {
  if (score === 0) return 0
  if (!score) return '--'
  return score
}

const Team = ({ winner, ...team }: TeamProps) => {
  const { setHover, hover } = useBracket()

  return (
    <StyledTeam
      winner={winner}
      onMouseOver={() => setHover(team?.id)}
      onMouseLeave={() => setHover(null)}
      isHovered={team?.id === hover}
    >
      <Container>
        <Information>
          <img
            className="team-logo"
            src={team?.logo || 'https://via.placeholder.com/64'}
            alt="Accessible Text"
          />
          <span className="team-name">{team?.name}</span>
        </Information>

        <Points>{handleScore(team.score)}</Points>
      </Container>
    </StyledTeam>
  )
}

export default Team
