import Match from './Match'
import Lines from './Lines'
import { StyledBracket, HeadingWrapper, Grouping, Prev } from './styles'
import {
  hundredThieves,
  cloud9,
  evilGeniuses,
  fnatic,
  immortals,
  teamLiquid,
  rouge,
  tsm,
} from '../../dummy'

import { BracketProvider } from './context'
import { BracketProps } from './types'

const Bracket = ({ handleEditClick }: BracketProps) => {
  return (
    <BracketProvider handleEditClick={handleEditClick}>
      <StyledBracket>
        <HeadingWrapper>
          <h2>Quarterfinals</h2>
          <h2>Semifinals</h2>
          <h2>Finals</h2>
        </HeadingWrapper>
        <Grouping>
          <Match teams={[hundredThieves, fnatic]} winner="1" />
          <Prev>
            <Grouping>
              <Match playing teams={[cloud9, hundredThieves]} winner="1" />
              <Prev>
                <Grouping>
                  <Match teams={[evilGeniuses, cloud9]} winner="2" />
                </Grouping>
                <Lines />
                <Grouping>
                  <Match teams={[hundredThieves, immortals]} winner="1" />
                </Grouping>
              </Prev>
            </Grouping>
            <Lines />
            <Grouping>
              <Match teams={[teamLiquid, fnatic]} winner="4" />
              <Prev>
                <Grouping>
                  <Match teams={[rouge, teamLiquid]} winner="6" />
                </Grouping>
                <Lines />
                <Grouping>
                  <Match teams={[tsm, fnatic]} winner="4" />
                </Grouping>
              </Prev>
            </Grouping>
          </Prev>
        </Grouping>
      </StyledBracket>
    </BracketProvider>
  )
}

export default Bracket
