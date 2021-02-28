import React from 'react'

// items
import Modal from '../Center/Center'
import { Container, Content } from './BottomStyle'

interface props {
    handleClose: any;
    children: any;
}

export default ({ handleClose, children }: props) => (
    <Modal handleClose={handleClose}>
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    </Modal>
)