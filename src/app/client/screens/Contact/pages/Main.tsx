import { Main } from 'app/client/widgets/basic'
import { ClientContainer } from 'app/client/widgets/smart'
import { contactAssets } from 'assets/public'
import { client } from 'utils/routes/client'

import { Hero, CanWeHelp, Link, OptContainer, OptionCard, Option, Report } from './MainStyle'

export default () => {

  return (
    <ClientContainer pageTitle={'Contact Us'}>
      <Hero bg={contactAssets.hero} border>
        <h1>Contact</h1>
      </Hero>
      <Main>
        <CanWeHelp>
          <h2>How can we help?</h2>
          <hr />
          <p>YT Properties is here to help you have an extraordinary experience.</p>
        </CanWeHelp>
        <OptContainer>
          <Option bg={contactAssets.list} t>
            <div />
            <div>
              <h3>Sell your home</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maiores aspernatur, totam aliquid accusantium quaerat odit dolor dolorum placeat ut, perspiciatis nemo recusandae praesentium corrupti exercitationem suscipit expedita ratione?</p>
              <Link to={client.contact.sell}>Sell with confidence</Link>
            </div>
          </Option>
          <OptionCard className='general-q-card'>
            <div />
            <div>
              <h3>General Questions</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maiores aspernatur, totam aliquid accusantium quaerat odit dolor dolorum placeat ut, perspiciatis nemo recusandae praesentium corrupti exercitationem suscipit expedita ratione?</p>
              <Link to={client.contact.ask}>Ask us a question</Link>
            </div>
          </OptionCard>
        </OptContainer>
        <Report>
          <div>
            <p className={'title'}>Report&nbsp;a Concern</p>
            <hr />
            <p className={'desc'}>Questions, comments, or other concerns?</p>
          </div>
          <Link to={client.contact.report}>Report&nbsp;a&nbsp;concern</Link>
        </Report>
      </Main>
    </ClientContainer>
  )
}