import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { client } from '../../../../../utils/routes/client';

export default ({ regLinks }: any) => {
  const Main = ({to, children, ...r}: any) => {
    if (regLinks) return <Link to={to}>{children}</Link>
    return <NavLink to={to} {...r}>{children}</NavLink>
  }
  return (
    <>
      <Main to={client.properties.main}>Find a Home</Main>
      <Main to={client.contact.list}>Cash For Your House</Main>
      <Main to={client.about.main}>About YTP</Main>
      <Main to={client.contact.main} exact>Contact Us</Main>
    </>
  )
}