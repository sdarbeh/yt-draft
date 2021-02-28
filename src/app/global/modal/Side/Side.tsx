import React from 'react'

// items
import { CenterModal } from '../index'
import { Content } from './SideStyle'

interface props {
    handleClose: any;
    children: any;
}

export default ({ handleClose, children }: props) => (
    <CenterModal handleClose={handleClose}>
        <Content>
            {children}
        </Content>
    </CenterModal>
)