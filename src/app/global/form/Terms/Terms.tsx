import React from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../../../utils/routes/client'
import styled from 'styled-components';

const Container = styled.div`
  p {
    font-size: ${p => p.theme.fontSize.xsmall};
    opacity: .7;
    margin: 0 0 5px 0;
  }
  span {
    text-transform: uppercase;
  }
  a {
    text-decoration: underline;
    opacity: .9;
  }
`

interface p {
  btnName: string
}

export default ({btnName}: p) => {
  return (
    <Container>
      <p>Yes, I would like more information from YT Properties. Please use and/or share my information with a YTP to contact me about my real estate needs.</p>
      <p>By clicking <span>{btnName}</span>, I agree YTP may contact me by phone or text message including by automated means about real estate services, and that I can access real estate services without providing my phone number. I acknowledge that I have read and agree to the <Link to={client.legal.terms}>Terms of Use</Link> and <Link to={client.legal.privacy}>Privacy Policy</Link>.</p>
    </Container>
  )
}