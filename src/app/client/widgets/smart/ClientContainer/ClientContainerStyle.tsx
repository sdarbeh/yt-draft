import styled from 'styled-components';
import { mediaQ } from 'utils/constants/media-queries';

export const Container = styled.div`
    padding: 60px 0 20px 0;
    width: 100%;
    height: calc(100vh - 80px);
    @media ${mediaQ.tablet} { 
        padding-top: 100px;
    }
`

export const Header = styled.header`
    background-color: ${props => props.theme.alpha};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
`

export const HeadAction = styled.div`
    display: none;
    opacity: 0;
    @media ${mediaQ.tablet} {
        background-color: ${props => props.theme.primary};
        font-size: ${p => p.theme.font.small};
        color: ${p => p.theme.globalColors.black};
        display: block;
        opacity: 1;
        padding: 5px 20px;
        span {
            padding: 0 10px;
        }
        button {
            display: inline;
        }
        a, button {
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        a:hover, button:hover {
            text-decoration: underline;
        }
    }
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px 20px;
    width: calc(100% - 40px);
    height: calc(60px - 20px);
    box-shadow: 0px 7px 17px -5px ${p => p.theme.sBravo};
    @media ${mediaQ.tablet} { 
        font-size: ${p => p.theme.font.large};
        justify-content: start;
        height: calc(70px - 20px);
    }
`

export const Content = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    @media ${mediaQ.tablet} { 
        min-height: calc(100vh - 100px);
    }
`