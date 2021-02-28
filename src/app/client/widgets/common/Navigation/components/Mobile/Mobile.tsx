import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { client } from "../../../../../../../utils/routes/client"
// items
import { Logo } from "../../../../../../global/basic"
import { MainLinks } from "../../../index"
import { SideModal } from "../../../../modal/types"
import { AccessibilityController } from "../../../../../../global/smart"

export default (p: any) => {
  return (
    <SideModal handleClose={p.handleClose}>
      <Content>
        <NavLink to={'/'} className="nav-logo"><Logo /></NavLink>
        <nav>
          <p className="mnav-t">Navigation</p>
          <div className="mmain">
            <MainLinks />
          </div>
          <p className="mnav-t">More</p>
          <div>
            <NavLink to={client.legal.fair_housing}>Fair Housing Act</NavLink>
            <NavLink to={client.advice.main}>Resources</NavLink>
            <button>Español</button>
            <NavLink to={client.calculators.main}>Calculators</NavLink>
          </div>
        </nav>
        <AccessibilityController className="nav-access" afterOpen={p.handleClose} />
      </Content>
    </SideModal>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-rows: 45px 1fr 50px;
  width: 100%;
  height: 100%;
  .nav-logo {
    padding: 0 8px;
  }
  nav {
    p.mnav-t {
      text-transform: uppercase;
      font-weight: 600;
      opacity: .6;
      padding: 0 8px;
      font-size: ${props => props.theme.fontSize.xsmall};
    }
    div {
      padding: 10px 0 30px 0;
      display: grid;
      row-gap: 10px;
    }
    button {
      justify-content: flex-start;
    }
    a, button {
      font-size: ${props => props.theme.fontSize.large};
      padding: 8px;
      border-radius: 5px;
    }
    a.active {
      box-shadow: ${p => p.theme.btnShadow};
      background: ${p => p.theme.primary};
      color: ${p => p.theme.globalColors.black};
      text-transform: uppercase;
    }
  }
  button.nav-access {
    font-size: ${props => props.theme.fontSize.large};
    display: grid;
    grid-template-columns: 25px 1fr;
    column-gap: 20px;
    svg {
      width: 100%;
      height: 100%;
    }
    span {
      width: max-content;
    }
  }
`