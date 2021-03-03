import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { cash, decimal, term } from '../../components/options';
// items
import { CalcContainer } from '../../components'
import { FormButton, Input } from '../../../../../../global/form'

export default () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (d: any) => {
    alert('Calculator not functional yet :)')
    console.log(d);
  }

  return (
    <Container
      pageTitle='Refinance - Calculators'
      title='Refinance Calculator'
    >
      <form action="POST" onSubmit={handleSubmit(submit)}>
        <div className="c-grid">
          <p className="c-grid-t">Mortage Information:</p>
          <div>
            <Input
              element='input'
              displayName='Current loan balance ($)'
              name='balance'
              placeholder='215800'
              options={cash.options}
              refs={register(cash.validator)}
            />
          </div>
          <div className="calc-f-med">
            <Input
              element='input'
              displayName='Current Interest rate (%)'
              name='cur_rate'
              placeholder='3.92'
              options={decimal.options}
              refs={register(decimal.validator)}
            />
          </div>
        </div>
        <div className="c-grid">
          <p className="c-grid-t">Refinance Information:</p>
          <div className="calc-f-min">
            <Input
              element='input'
              displayName='New interest rate (%)'
              name='new_rate'
              placeholder='3.92'
              options={decimal.options}
              refs={register(decimal.validator)}
            />
          </div>
          <div>
            <Input
              element='input'
              displayName='Estimated property value ($)'
              name='property'
              placeholder='275100'
              options={cash.options}
              refs={register(cash.validator)}
            />
          </div>
          <div>
            <Input
              element='input'
              displayName='Estimated loan amount ($)'
              name='loan'
              placeholder='2163'
              options={cash.options}
              refs={register(cash.validator)}
            />
          </div>
          <div className="calc-f-med">
            <Input
              element='select'
              displayName='Mortage period (years)'
              name='term'
              selectOptions={term.select}
              refs={register(term.validator)}
            />
          </div>
        </div>
        <div className="calc-btns">
          <button
            className="calc-reset"
            onClick={reset}>
            Reset</button>
          <div>
            <FormButton text={'Calculate'} />
          </div>
        </div>
      </form>
    </Container>
  )
}


const Container = styled(CalcContainer)`
  form {
    row-gap: 30px;
  }
  div.c-grid {
    display: grid;
    row-gap: 10px;
  }
  p.c-grid-t {
    font-size: ${p => p.theme.fontSize.large};
    opacity: .5;
    font-weight: 600;
  }
`