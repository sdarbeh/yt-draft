import { Input } from "app/global/form";
import { ErrMsg, FormButton, Terms } from "app/global/form-widgets";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mediaQ } from "utils/constants/media-queries";
import { nameValidator, emailValidator, phoneValidator, messageValidator } from "utils/validators";


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

const Container = styled.div`
  border: 1px solid ${p => p.theme.primary};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 2px 30px -10px ${p => p.theme.sBravo};
  form {
    padding: 20px;
  }
`

const Heading = styled.div`
  background: ${p => p.theme.primary};
  padding: 20px;
`

const FormContent = styled.div`
  margin: 30px 0 0 0;
  display: grid;
  row-gap: 20px;
  @media ${mediaQ.tablet} { 
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
`

const Grid = styled.div`
   display: grid;
   row-gap: 20px;
   @media ${mediaQ.tablet} { 
    row-gap: 10px;
   }
`

const ButtonContainer = styled.div`
  button {
    width: 150px;
    margin: 30px 0 0 auto; 
  }
`