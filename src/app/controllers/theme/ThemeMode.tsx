import { useThemeMode } from 'app/hooks/theme'
import { circleCheckFilledIcon, circleIcon } from 'assets/icons/widgets'
import styled from 'styled-components'

const ThemeMode = () => {
  const { currentThemeMode, themeModesArray, setThemeMode } = useThemeMode()
  return (
    <Container className='theme-mode-controller'>
      {themeModesArray.map((mode: any, i: number) => (
        <Button
          key={i}
          modeAlpha={mode.colors.alpha}
          modeCharlie={mode.colors.charlie}
          isCurrentMode={mode.name === currentThemeMode}
          onClick={() => setThemeMode(mode.name)}
        >
          <div>
            {mode.name === currentThemeMode ? circleCheckFilledIcon : circleIcon}
          </div>
          <div>{mode.name}</div>
        </Button>
      ))}
    </Container>
  )
}

export default ThemeMode

const Container = styled.div`
  display: grid;
  row-gap: 10px;
`

interface btn {
  theme: any;
  modeAlpha: string;
  modeCharlie: string;
  isCurrentMode: boolean;
}

const Button = styled.button`
  background-color: ${(p: btn) => p.modeAlpha};
  color: ${(p: btn) => p.modeCharlie};
  border: 2px solid ${(p: btn) => 
    p.isCurrentMode ? p.theme.primary : p.theme.medium };
  box-shadow: ${(p: btn) => p.isCurrentMode ? p.theme.btnShadow : 'unset'};
  font-size: ${p => p.theme.font.small};
  font-weight: ${(p:btn) => p.isCurrentMode ? '700' : '500'};
  text-transform: capitalize;
  display: grid;
  grid-template-columns: ${p => `calc(${p.theme.icon.small} - 5px) 1fr`};
  padding: ${p => `0 ${p.theme.icon.xsmall}`};
  height: ${p => `calc(${p.theme.icon.xjumbo} + 10px)`};
  border-radius: 5px;
  svg {
    width: ${p => `calc(${p.theme.icon.small} - 5px)`};
    transform: scale(1.2);
    opacity: ${(p: btn) => p.isCurrentMode ? 1 : .5};
    color: ${(p: btn) => p.isCurrentMode ? p.theme.primary : 'inherit'};
    box-shadow: ${(p: btn) => p.isCurrentMode ? p.theme.btnShadow : 'unset'};
    border-radius: 50%;
    overflow: hidden;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div:nth-child(2) {
    /* button text value --- allows centered */
    margin-left: -25px;
    width: calc(100% + 25px);
  }
`