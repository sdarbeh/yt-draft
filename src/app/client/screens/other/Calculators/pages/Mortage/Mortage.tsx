import React from 'react'
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
    <CalcContainer
      pageTitle='Mortage - Calculators'
      title='Mortage calculator'
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
            displayName='Home sale price ($)'
            name='home'
            placeholder='265100'
            options={cash.options}
            refs={register(cash.validator)}
          />
        </div>
        <div>
          <Input
            element='input'
            displayName='Mortage amount ($)'
            name='loan'
            placeholder='275100'
            options={cash.options}
            refs={register(cash.validator)}
          />
        </div>
        <div>
          <Input
            element='input'
            displayName='Annual property taxes ($)'
            name='tax'
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