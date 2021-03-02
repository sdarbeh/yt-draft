import styled from 'styled-components'
import { rgbToRgba } from '../../../../../utils/helpers/color'
import { CenteredDiv } from '../../../../global/basic'
interface p {
  name: string;
  title: string;
  description: string;
  image?: string;
}

export default ({ name, title, description, image }: p) => {
  
  return (
    <Container bg={image ? image : null}>
      <div className='tmc-banner' />
      <div className='tmc-content'>
        <CenteredDiv className='tmc-img'>
          <div></div>
        </CenteredDiv>
        <div>
          <p className='tmc-name'>{name}</p>
          <p className='tmc-title'>{title}</p>
          <p className='tmc-desc'>{description}</p>
        </div>
      </div>
    </Container>
  )
}

interface h {
  bg: any;
  theme: any;
}

const Container = styled.div`
  width: 145px;
  display: grid;
  grid-template-rows: 70px 1fr;
  div.tmc-banner {
    box-shadow: 0px 7px 17px -5px ${p => p.theme.bravo};
    background: ${p => p.theme.bravo};
    border: 1px solid ${p => rgbToRgba(p.theme.charlie, .01)};
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  div.tmc-content {
    margin-top: -50px;
    display: grid;
    grid-template-rows: 80px 1fr;
    row-gap: 15px;
    p {
      text-align: center;
    }
  }
  div.tmc-img {
    height: 80px;
    div {
      background: ${(p: h) => p.bg ? `url(${p.bg})` : p.theme.alpha};
      box-shadow: 0px 10px 20px -5px ${p => rgbToRgba(p.theme.charlie, .2)};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  p.tmc-name {
    font-weight: 700;
  }
  p.tmc-title, p.tmc-desc {
    font-size: ${p => p.theme.fontSize.small};
    opacity: .8
  }
  p.tmc-desc {
    margin-top: 5px;
  }
`