import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { device } from '../../../../../utils/constants/mediaQueries'
import { emailValidator, messageValidator, nameValidator, phoneValidator } from '../../../../../utils/validators'

// items
import { Input, Terms, FormButton, ErrMsg } from '../../../../global/form'

export default () => {
  // const [loading, setLoading] = useState(false)
  const { register, handleSubmit, errors, reset } = useForm();

  const submit = (d: any) => {
    alert('Form not functional yet :)')
    console.log(d);
  }

  return (
    <Container>
      <form action="POST" onSubmit={handleSubmit(submit)}>
        <div>
          <Input
            element={'input'}
            name={'First Name'}
            refs={register(nameValidator)}
          />
          {errors.first_name && <ErrMsg msg={'Invalid first name'} />}
        </div>
        <div>
          <Input
            element={'input'}
            name={'Last Name'}
            refs={register(nameValidator)}
          />
          {errors.last_name && <ErrMsg msg={'Invalid last name'} />}
        </div>
        <div>
          <Input
            element={'input'}
            name={'Email'}
            refs={register(emailValidator)}
          />
          {errors.email && <ErrMsg msg={'Please enter a email'} />}
        </div>
        <div>
          <Input
            element={'input'}
            displayName={'Phone: 1234567980'}
            name={'Phone'}
            refs={register(phoneValidator)}
          />
          {errors.phone && <ErrMsg msg={'Please enter a valid phone number'} />}
        </div>
        <div>
          <Input
            element={'input'}
            displayName={'Date of incident (MM/DD/YYYY)'}
            name={'date'}
            refs={register(nameValidator)}
          />
          {errors.date && <ErrMsg msg={'Date of incident required'} />}
        </div>
        <div>
          <div>
            <Input
              element={'textarea'}
              displayName={'Describe the issue'}
              name={'message'}
              refs={register(messageValidator)}
            />
            {errors.message && <ErrMsg msg={'Message field required'} />}
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