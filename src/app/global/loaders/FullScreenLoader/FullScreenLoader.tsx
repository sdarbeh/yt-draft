import React from 'react'

// items
import { Ellipsis } from '../index'
import { Container, Message } from './FullScreenLoaderStyle'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Container>
        <Ellipsis />
        <Message>Finding awesome stuff</Message>
    </Container>
)