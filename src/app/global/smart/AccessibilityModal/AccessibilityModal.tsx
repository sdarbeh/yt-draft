import React from 'react'
import { CenterModal } from '../../modal'

import { useAccessibilltyModal } from '../../../../hooks'
// items
import { FontSizeController, ThemeModeController } from './controllers'
import { Container, Content, DoneButton, Description, SectionTitle, UIContainer } from './AccessibilityModalStyle'

export default () => {
    const { accessibilityModalActive, setAccessibilityModal } = useAccessibilltyModal()
    const close = () => setAccessibilityModal(false)

    if (!accessibilityModalActive) return null
    return (
        <CenterModal handleClose={close}>
            <Container>
                <Content>
                    <DoneButton onClick={close}>Done</DoneButton>
                    <Description>Customize your font size, color and background.</Description>
                    {/* Font size */}
                    <SectionTitle>Font size</SectionTitle>
                    <UIContainer>
                        <FontSizeController />
                    </UIContainer>
                    {/* Language */}
                    <SectionTitle>Language</SectionTitle>
                    <h3>(Language Controller goes here)</h3>
                    {/* Theme mode */}
                    <SectionTitle>Background</SectionTitle>
                    <UIContainer>
                        <ThemeModeController />
                    </UIContainer>
                </Content>
            </Container>
        </CenterModal>
    )
}