import React from 'react'

// items
import { CalcContainer } from '../../components'
import { Input } from '../../../../../../global/form'

export default () => {
  return (
    <CalcContainer
      pageTitle='Mortage - Calculators'
      title='Mortage calculator'
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
          name='Home sale price ($)'
          placeholder='265100'
        />
      </div>
      <div>
        <Input
          element='input'
          name='Mortage amount ($)'
          placeholder='275100'
        />
      </div>
      <div>
        <Input
          element='input'
          name='Annual property taxes ($)'
          placeholder='2163'
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