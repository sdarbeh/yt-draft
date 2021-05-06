//items
import { PageTitle } from 'app/global/smart'
import { Link } from '../AboutStyle'
import { aboutAssets } from 'assets/public'
import { client } from 'utils/routes/client'
import styled from 'styled-components'
import { mediaQ } from 'utils/constants/media-queries'

export default () => {
  return (
    <div>
      <PageTitle title={'About Us - Our History, Team and FAQs'} />
      <Section bg={aboutAssets.company}>
        <div className='m-content'>
          <p className="title">Company Profile</p>
          <p>Learn about the history behind YT Properties.</p>
          <Link to={client.about.company}>View company profile</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
      <Section className='m-revert' bg={aboutAssets.team}>
        <div className='m-content'>
          <p className="title">Our Team</p>
          <p>Meet our team.</p>
          <Link to={client.about.team}>Meet our team members</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
      <Section bg={aboutAssets.faq}>
        <div className='m-content'>
          <p className="title">FAQs</p>
          <p>Browse our Frequently Asked Questions.</p>
          <Link to={client.about.faqs}>See our FAQs</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
    </div>
  )
}

interface m {
  bg: string;
  theme: any;
}

const Section = styled.div`
  border-bottom: 2px solid ${p => p.theme.sBravo};
  padding: 30px 0;
  grid-template: 'media''content';
  row-gap: 10px;
  &.m-revert div.m-content {
    text-align: right;
    a {
      margin: 0 0 0 auto;
    }
  }
  &, div.m-content {
    display: grid;
    grid-template-rows: 40px 1fr 45px;
    row-gap: 10px;
  }
  p.title {
    font-size: ${p => p.theme.font.jumbo};
    font-weight: 700;
  }
  div.m-content {
    grid-area: content;
  }
  div.m-media {
    box-shadow: ${p => p.theme.btnShadow};
    grid-area: media;
    height: 125px;
    border-radius: 2px;
    overflow: hidden;
    div {
      background: url(${(p:m) => p.bg});
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
  @media ${mediaQ.tablet} { 
    grid-template: unset;
    row-gap: unset;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    padding: 40px 0;
    height: calc(250px - 80px);
    div.m-content, div.m-media {
      grid-area: unset;
      width: 100%;
      height: 100%;
    }
    a {
      height: calc(45px - 20px);
      margin: auto 0 0 0;
    }
    &.m-revert {
      div.m-content {
        text-align: left;
        a {
          margin: auto 0 0 0;
        }
      }
      div.m-media {
        grid-area: media-l;
      }
      grid-template: 'media-l content';
    }
  }
`