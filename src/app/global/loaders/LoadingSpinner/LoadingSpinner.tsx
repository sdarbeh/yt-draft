/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { useThemeMode } from '../../../../hooks/theme'
import { Container } from './LoadingSpinnerStyle'

interface props {
    size: number;
    themed?: boolean;
    color?: string;
}

export default ({ size, themed, color }: props) => {
    const { themeModeColors, themeColors } = useThemeMode()

    const sizing = size ? size : 30

    const getColor = () => {
        if (themed) {
            return themeColors.primary
        } else if (!color && !themed) {
            return themeModeColors.charlie
        }
        return color
    }

    return (
        <Container size={sizing}>
            <ClipLoader
                size={sizing}
                color={getColor()}
                loading={true}
            />
        </Container>
    )
}
