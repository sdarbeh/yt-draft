import { Input, ErrMsg, Terms, FormButton } from "app/global/form";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { device } from "utils/constants/mediaQueries";
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
      <form action="POST" onSubmit={handleSubmit(submit)}>
        <FormContent>
          <Grid>
            <Column>
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
            </Column>
            <Column>
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
            </Column>
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
    @media ${device.tablet} {
      border: unset;
      form {
        padding: unset;
      }
    }
`

const FormContent = styled.div`
  margin: 30px 0 0 0;
  display: grid;
  row-gap: 20px;
  @media ${device.tablet} {
    margin: unset;
    display: block;
    row-gap: unset;
  }
`

const Grid = styled.div`
   display: grid;
   row-gap: 20px;
   @media ${device.tablet} { 
    row-gap: 10px;
   }
`

const Column = styled(Grid)`
    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        row-gap: unset;
   }
`

const ButtonContainer = styled.div`
    button {
        width: 150px;
        margin: 30px 0 0 auto; 
    }
`