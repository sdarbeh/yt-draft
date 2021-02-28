import React from 'react'
import { circleCheckIcon, circleIcon } from '../../../../../../assets/icons/widgets'

import { useThemeMode } from '../../../../../../hooks/theme'

import { CenteredDiv } from '../../../../basic'
import { Container, Button } from './ThemeModeStyle'

export default () => {

    const { currentThemeMode, themeModesArray, setThemeMode } = useThemeMode()

    return (
        <Container>
            {themeModesArray.map((mode: any, i: number) => (
                <Button
                    key={i}
                    modeAlpha={mode.colors.alpha}
                    modeCharlie={mode.colors.charlie}
                    isCurrentMode={mode.value === currentThemeMode}
                    onClick={() => setThemeMode(mode.value)}
                >
                    <CenteredDiv>
                        {mode.value === currentThemeMode ? circleCheckIcon : circleIcon}
                    </CenteredDiv>
                    <CenteredDiv>{mode.value}</CenteredDiv>
                </Button>
            ))}
        </Container>
    )
}