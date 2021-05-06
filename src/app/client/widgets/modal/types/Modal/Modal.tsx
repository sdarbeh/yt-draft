import { usePageScroll } from 'app/hooks/app'
import { useThemeMode } from 'app/hooks/theme'
import React, { useEffect } from 'react'
import { rgbToRgba } from 'utils/helpers/color'


//items
import { Container, Backdrop } from './ModalStyle'

interface props {
    handleClose: any;
    children: any;
}

export default ({ children, handleClose }: props) => {
    const { themeModeColors } = useThemeMode() as any
    const { disableScroll, enableScroll } = usePageScroll()

    useEffect(() => {
        disableScroll()
        return () => enableScroll()
    }, [disableScroll, enableScroll])

    return (
        <Container>
            <Backdrop
                onClick={handleClose}
                overlay={rgbToRgba(themeModeColors.alpha, .3)}
            />
            {children}
        </Container>
    )
}
