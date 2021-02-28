import styled from 'styled-components'

interface h {
  bg: any;
  theme: any;
}

const Container = styled.div`
  min-width: 145px;
  min-height: 200px;
  max-width: 145px;
  max-height: 200px;
  display: grid;
  grid-template-rows: 1fr 60px;
  div.tmc-img {
    box-shadow: 0px 7px 17px -5px ${p => p.theme.sBravo};
    background: ${(p:h) => p.bg ? `url(${p.bg})` : p.theme.bravo};
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  div.tmc-content {
    padding: 5px 0;
    p {
      text-align: center;
    }
    p:first-child {
      font-weight: 700;
    }
    p:nth-child(2) {
      font-size: ${p => p.theme.fontSize.small};
      opacity: .8
    }
  }
`

interface p {
  name: string;
  title: string;
  image?: string;
}

export default ({ name, title, image }: p) => {
  return (
    <Container bg={image ? image : null}>
      <div className='tmc-img' />
      <div className='tmc-content'>
        <p>{name}</p>
        <p>{title}</p>
      </div>
    </Container>
  )
}