import styled from 'styled-components'
import { device } from '../../../../utils/constants/mediaQueries'

export const Container = styled.div`
    border: 1px solid ${p => p.theme.primary};
    border-radius: 5px;
    overflow: hidden;
    form {
        padding: 20px;
        display: grid;
        row-gap: 20px;
        @media ${device.tablet} { 
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
        }
    }
    div.btn-container {
        margin-top: 20px;
        button {
            width: 150px;
            margin: 30px 0 0 auto;
        }
    }
`