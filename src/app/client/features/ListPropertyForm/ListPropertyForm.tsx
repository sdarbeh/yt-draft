import React from 'react'
import { Input, Terms, FormButton } from '../../../global/form'

// items
import { Container, Heading, Grid, FormContent, ButtonContainer } from './ListPropertyFormStyle'

export default () => {
  return (
    <Container>
      <Heading>
        <p>Contact us today to learn about listing your home with YT Properties.</p>
      </Heading>
      <form action="POST">
        <FormContent>
          <Grid>
            <div>
              <Input
                element={'input'}
                name={'First Name'}
              />
            </div>
            <div>
              <Input
                element={'input'}
                name={'Last Name'}
              />
            </div>
            <div>
              <Input
                element={'input'}
                name={'Zip Code'}
              />
            </div>
            <div>
              <Input
                element={'input'}
                name={'Email'}
              />
            </div>
            <div>
              <Input
                element={'input'}
                name={'Phone'}
              />
            </div>
          </Grid>
          <Grid>
            <div>
              <Input
                element={'textarea'}
                name={'Questions / Comments'}
              />
            </div>
            <ButtonContainer>
              <Terms btnName={'SEND MESSAGE'} />
              <FormButton text={'SEND MESSAGE'} />
            </ButtonContainer>
          </Grid>
        </FormContent>
      </form>
    </Container>
  )
}