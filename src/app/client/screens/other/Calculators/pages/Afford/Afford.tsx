import React from 'react'

// items
import { CalcContainer } from '../../components'
import { Input } from '../../../../../../global/form'

export default () => {
  return (
    <CalcContainer
      pageTitle='Affordabilty - Calculators'
      title='Affordabilty calculator'
      results={''}
    >
      <div className="calc-f-min">
        <Input
          element='input'
          name='Interest rate (%)'
          placeholder='3.92'
        />
      </div>
      <div>
        <Input
          element='input'
          name='Monthly gross income ($)'
          placeholder='6500'
        />
      </div>
      <div>
        <Input
          element='input'
          name='Monthly debts ($)'
          placeholder='1300'
        />
      </div>
      <div className="calc-f-med">
        <Input
          element='select'
          name='Mortage period (years)'
          selectOptions={['25','30','35','40']}
        />
      </div>
    </CalcContainer>
  )
}