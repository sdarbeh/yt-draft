import React from 'react'
import { Input, Terms, FormButton } from '../../../global/form'

// items
import { Container } from './ReportConcernFormStyle'

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