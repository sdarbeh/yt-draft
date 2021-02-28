import React from 'react'
import styled from 'styled-components'

// items
import { CalcContainer } from '../../components'
import { Input } from '../../../../../../global/form'

export default () => {
  return (
    <Container
      pageTitle='Refinance - Calculators'
      title='Refinance Calculator'
    >
      <div className="c-grid">
        <p className="c-grid-t">Mortage Information:</p>
        <div>
          <Input
            element='input'
            name='Current loan balance ($)'
            placeholder='215800'
          />
        </div>
        <div className="calc-f-med">
          <Input
            element='input'
            name='Current Interest rate (%)'
            placeholder='3.92'
          />
        </div>
      </div>
      <div className="c-grid">
        <p className="c-grid-t">Refinance Information:</p>
        <div className="calc-f-min">
          <Input
            element='input'
            name='New interest rate (%)'
            placeholder='3.92'
          />
        </div>
        <div>
          <Input
            element='input'
            name='Estimated property value ($)'
            placeholder='275100'
          />
        </div>
        <div>
          <Input
            element='input'
            name='Estimated loan amount ($)'
            placeholder='2163'
          />
        </div>
        <div className="calc-f-med">
          <Input
            element='select'
            name='Mortage period (years)'
            selectOptions={['25', '30', '35', '40']}
          />
        </div>
      </div>
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