import { CenteredDiv } from 'app/global/basic'
import { locationPinIcon } from 'assets/icons/widgets'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { client } from 'utils/routes/client'

export default () => {
  return (
    <Container>
      <div className="pls-search">
        <CenteredDiv>{locationPinIcon}</CenteredDiv>
        <input type="text" name="properties-search" />
        <button>Search YTP</button>
      </div>
      {/* <div className="pls-p">
        <Link to={client.properties.main}>Properties <span>(212)</span></Link>
      </div> */}
    </Container>
  )
}

const Container = styled.div`
  div.pls-search {
    background-color: ${p => p.theme.bravo};
    box-shadow: 0px 7px 17px -5px ${p => p.theme.sBravo};
    position: relative;
    height: 50px;
    max-width: 600px;
    margin-bottom: 20px;
    &, input {
      border-radius: 50px;
    }
    div, button {
      height: 100%;
    }
    div, input, button {
      position: absolute;
      top: 0;
    }
    div {
      width: 45px;
      left: 0;
    }
    svg {
      color: ${p => p.theme.medium};
      width: 20px;
      height: 20px;
    }
    input {
      padding: 0 100px 0 35px;
      width: calc(100% - 147px);
      height: calc(100% - 2px);
      border: 1px solid transparent;
      &:focus {
        border-color: ${p => p.theme.primary};
      }
    }
    button {
      font-size: ${p => p.theme.font.small};
      background: ${p => p.theme.primary};
      font-weight: 600;
      text-transform: uppercase;
      right: 0;
      width: 100px;
      border-radius: 2px 50px 50px 2px;
    }
  }
  div.pls-p {
    span {
      color: ${p => p.theme.primary};
    }
  }
`