import React from 'react'
import styled from 'styled-components'
import { device } from '../../../../utils/constants/mediaQueries'

// items
import { Input, Terms, FormButton } from '../../../global/form'

export default () => {
  return (
    <Container>
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

const Container = styled.div`
    border: 1px solid ${p => p.theme.primary};
    border-radius: 5px;
    overflow: hidden;
    form {
        padding: 20px;
    }
`

const FormContent = styled.div`
  margin: 30px 0 0 0;
  display: grid;
  row-gap: 20px;
  @media ${device.tablet} { 
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
`

const Grid = styled.div`
   display: grid;
   row-gap: 20px;
   @media ${device.tablet} { 
    row-gap: 10px;
   }
`

const ButtonContainer = styled.div`
    button {
        width: 150px;
        margin: 30px 0 0 auto; 
    }
`