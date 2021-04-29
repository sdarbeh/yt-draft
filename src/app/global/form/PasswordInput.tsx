import { eyeIcon, eyeHiddenIcon } from 'assets/icons/widgets'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from './index'

interface props {
    displayName?: string;
    refs?: any;
    name: string;
}

export default ({ name, ...rest }: props) => {
    const [ visible, setVisible ] = useState(false)
    return (
        <Container visible={visible}>
            <Input
                type={visible ? 'text' : 'password'}
                element={'input'}
                name={name}
                {...rest}
            />
            <button 
                onClick={() => setVisible(prev => !prev)}
                type={'button'}
            >
                { visible ? eyeIcon : eyeHiddenIcon}
            </button>
        </Container>
    )
}

interface p {
    visible: boolean;
}

export const Container = styled.div`
    position: relative;
    button {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 35px;
        width: 20px;
    }
    svg {
        width: 100%;
        height: 100%;
        opacity: ${(props:p) => props.visible ? .7 : .1};
    }
`