import { ClientContainer } from 'app/client/widgets/smart'
import { hiwAssets } from 'assets/public'
import styled from 'styled-components'
import { Hero } from './HiwStyle'

export default () => {
  return (
    <ClientContainer pageTitle='How it works'>
      <Hero bg={hiwAssets.hero}>
        <h1>How it works</h1>
      </Hero>
      <Container>
        <p>Are you looking to sell your house without the usual stress, fees, repairs, realtors, or the general panic? YT Properties is your go-to company. We buy houses fast and put a fair cash offer down within 24 hours without the usual fees and hassle. Are you wondering how to sell your Oklahoma home for a fair price in as little as one day?</p>
        <p>Let us show you how: </p>
        <ul>
          <li>You want to sell your home quickly and efficiently. </li>
          <li>You give our team a call with your information </li>
          <li>We discuss your options, no matter your situation.</li>
          <li>Your home sells (fast and minus the fanfare, just like we promised).</li>
        </ul>
        <p>Our clients use YT Properties because we're quick, we'll get you the best deal we can, and our team is expert when it comes to Tulsa real estate. Whether your home is in foreclosure, probate, divorce, or you don't have time to deal with the headache of traditional selling, YT Properties can help you sell your home faster than you can say real estate. </p>
      </Container>
    </ClientContainer>
  )
}

export const Container = styled.div`
  display: grid;
  row-gap: 20px;
  padding: 20px;
  ul {
    display: grid;
    row-gap: 10px;
    grid-template-columns: unset;
  }
`