import React from 'react'
import { useForm } from 'react-hook-form';
import { emailValidator, messageValidator, nameValidator, phoneValidator } from '../../../../../utils/validators'

// items
import { Input, Terms, FormButton, ErrMsg } from '../../../../global/form'
import { Container, Heading, Grid, FormContent, ButtonContainer } from './ListPropertyFormStyle'

export default () => {
  // const [loading, setLoading] = useState(false)
  const { register, handleSubmit, errors, reset } = useForm();

  const submit = (d: any) => {
    alert('Form not functional yet :)')
    console.log(d);
  }

  return (
    <Container>
      <Heading>
        <p>Contact us today to learn about listing your home with YT Properties.</p>
      </Heading>
      <form action="POST" onSubmit={handleSubmit(submit)}>
        <FormContent>
          <Grid>
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
                name={'address'}
                refs={register({
                  required: true,
                  maxLength: 30,
                  minLength: 10,
                })}
              />
              {errors.address && <ErrMsg msg={'Invalid address'} />}
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
          </Grid>
          <Grid>
            <div>
              <Input
                element={'textarea'}
                displayName={'Questions / Comments'}
                name={'message'}
                refs={register(messageValidator)}
              />
              {errors.message && <ErrMsg msg={'Message field required'} />}
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