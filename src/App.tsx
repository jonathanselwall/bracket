import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './components/_settings/globalStyles'
import theme from './components/_settings/theme'
import Header from './components/Header'
import Bracket from './components/Bracket'
import Sidebar from './components/Sidebar'
import { hideScrollBar } from './components/_settings/mixins'

import { Team } from './types'
import { AppProvider, useAppState } from './context'

function App() {
  const { sidebar, toggleSidebar, setSelected, selected } = useAppState()

  const handleEditClick = (teams: Team[]) => {
    setSelected(teams)
    toggleSidebar()
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <Main>
          <Bracket handleEditClick={handleEditClick} />
        </Main>
        <Sidebar
          open={sidebar}
          closeSidebar={() => toggleSidebar(false)}
          selected={selected}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default () => (
  <AppProvider>
    <App />
  </AppProvider>
)

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`
const Main = styled.main`
  position: relative;
  flex: 1;
  display: flex;
  background-color: var(--color-bg-main);
  background: linear-gradient(
    180deg,
    #202125 0%,
    var(--color-bg-main) 30%,
    var(--color-bg-main) 100%
  );
  overflow: auto;
  ${hideScrollBar}

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    display: block;
    background: linear-gradient(
      180deg,
      var(--color-bg-main) 0%,
      #ff1c00 50%,
      var(--color-bg-main) 100%
    );
    opacity: 0.02;
  }
`
