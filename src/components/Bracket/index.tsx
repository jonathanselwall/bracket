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
          <Match teams={[fnatic]} />
          <Prev>
            <Grouping>
              <Match
                playing
                teams={[
                  { ...cloud9, score: 2 },
                  { ...hundredThieves, score: 0 },
                ]}
                winner="1"
              />
              <Prev>
                <Grouping>
                  <Match
                    teams={[
                      { ...evilGeniuses, score: 3 },
                      { ...cloud9, score: 5 },
                    ]}
                    winner="2"
                  />
                </Grouping>
                <Lines />
                <Grouping>
                  <Match
                    teams={[
                      { ...hundredThieves, score: 6 },
                      { ...immortals, score: 2 },
                    ]}
                    winner="1"
                  />
                </Grouping>
              </Prev>
            </Grouping>
            <Lines />
            <Grouping>
              <Match
                teams={[
                  { ...teamLiquid, score: 4 },
                  { ...fnatic, score: 6 },
                ]}
                winner="4"
              />
              <Prev>
                <Grouping>
                  <Match
                    teams={[
                      { ...rouge, score: 2 },
                      { ...teamLiquid, score: 4 },
                    ]}
                    winner="6"
                  />
                </Grouping>
                <Lines />
                <Grouping>
                  <Match
                    teams={[
                      { ...tsm, score: 1 },
                      { ...fnatic, score: 3 },
                    ]}
                    winner="4"
                  />
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
