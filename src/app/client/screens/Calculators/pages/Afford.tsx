import { Input, FormButton } from 'app/global/form';
import React from 'react'
import { useForm } from 'react-hook-form';
import { CalcContainer } from '../components';
import { cash, decimal, term } from '../components/options';
// items


export default () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (d: any) => {
    alert('Calculator not functional yet :)')
    console.log(d);
  }

  return (
    <CalcContainer
      pageTitle='Affordabilty - Calculators'
      title='Affordabilty calculator'
      results={''}
    >
      <form action="POST" onSubmit={handleSubmit(submit)}>
        <div className="calc-f-min">
          <Input
            element='input'
            displayName='Interest rate (%)'
            name='rate'
            placeholder='3.92'
            options={decimal.options}
            refs={register(decimal.validator)}
          />
        </div>
        <div>
          <Input
            element='input'
            displayName='Monthly gross income ($)'
            name='income'
            placeholder='6500'
            options={cash.options}
            refs={register(cash.validator)}
          />
        </div>
        <div>
          <Input
            element='input'
            displayName='Monthly debts ($)'
            name='debts'
            placeholder='1300'
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
    </CalcContainer>
  )
}