import React from 'react'
import styled from 'styled-components'
import { device } from '../../../../utils/constants/mediaQueries'

// items
import { Input, Terms, FormButton } from '../../../global/form'

export default () => {
  return (
    <Container>
      <form action="POST">
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
            name={'Email'}
          />
        </div>
        <div>
          <Input
            element={'input'}
            name={'Phone'}
          />
        </div>
        <div>
          <Input
            element={'input'}
            name={'Date of incident (MM/DD/YYYY)'}
          />
        </div>
        <div>
          <div>
            <Input
              element={'textarea'}
              name={'Describe the issue'}
            />
          </div>
          <div className='btn-container'>
            <Terms btnName={'SUBMIT'} />
            <FormButton text={'SUBMIT'} />
          </div>
        </div>
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
        display: grid;
        row-gap: 20px;
        @media ${device.tablet} { 
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
        }
    }
    div.btn-container {
        margin-top: 20px;
        button {
            width: 150px;
            margin: 30px 0 0 auto;
        }
    }
`