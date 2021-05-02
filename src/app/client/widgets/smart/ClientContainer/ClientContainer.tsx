import { useMediaQuery } from '@material-ui/core';
import { Logo } from 'app/global/basic';
import { PageTitle, AccessibilityController } from 'app/global/smart';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { device } from 'utils/constants/mediaQueries';
import { client } from 'utils/routes/client';
import { Navigation, Footer } from '../../common'
import { Container, Header, HeadAction, HeaderContent, Content } from './ClientContainerStyle'

interface props {
  children: any;
  pageTitle: string;
  searchProps?: any;
  hideFooter?: boolean;
  error?: any;
}

export default ({ children, pageTitle }: props) => { 
  const matches = useMediaQuery(device.tablet) 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <PageTitle title={pageTitle} />
      <Header>
        <HeadAction>
          <a href="tel:123-456-7890">123-456-7890</a>
          <span>•</span>
          <Link to={client.about.company}>Company Profile</Link>
          <span>•</span>
          <Link to={client.legal.fair_housing}>Fair Housing Act</Link>
          <span>•</span>
          <Link to={client.advice.main}>Resources</Link>
          <span>•</span>
          <button>Español</button>
          <span>•</span>
          <Link to={client.calculators.main}>Calculators</Link>
        </HeadAction>
        <HeaderContent>
          <NavLink to={client.home}><Logo /></NavLink>
          <Navigation />
        </HeaderContent>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer />
      { matches && <AccessibilityController fixedIcon={matches} /> }
    </Container>
  );
}