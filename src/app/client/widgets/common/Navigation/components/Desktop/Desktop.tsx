import React from "react";
import styled from "styled-components";

import { MainLinks } from '../../../../common';

export default () => {
  return (
    <Container>
      <div className="nav-content">
        <MainLinks />
      </div>
      <div className='nav-language'>
        <button>English</button>
      </div>
    </Container>
  )
}

const Container = styled.nav`
  margin-left: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  div.nav-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
  a {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
  }
  a.active {
    color: ${props => props.theme.primary};
    font-weight: 700;
  }
  div.nav-language {
    margin: 0 0 0 auto;
  }
  button {
    border: 2px solid ${p => p.theme.primary};
    padding: 2px 12px;
    border-radius: 3px;
  }
`