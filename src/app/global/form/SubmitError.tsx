// items
import { CenteredDiv } from 'app/global/basic'
import { warningIcon } from 'assets/icons/widgets'
import React from 'react'
import styled from 'styled-components'

interface prop {
    msg?: string;
    attempts: number;
    maxAttempts: number;
}

export default ({ msg, attempts, maxAttempts, ...rest }: prop) => {
    const remaining = maxAttempts - attempts
    return (
        <Container {...rest}>
            { remaining !== 0 ?
                <Error>
                    <CenteredDiv>{warningIcon}</CenteredDiv>
                    <div>
                        <span>{msg ? msg : 'Oops, an error occured. Please try again.'}</span><br/>
                        <span>{`${remaining} ${remaining === 1 ? 'attempt' : 'attempts'} remaining`}</span>
                    </div>
                </Error>
                :
                <MaxAttempts>
                    <h2>Submission attempts exceeded.</h2>
                </MaxAttempts>
            }
        </Container>
    )
}

export const Container = styled.div`
  margin: 10px 0 -10px 0;
`

export const Error = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.globalColors.error};
  display: grid;
  grid-template-columns: 28px 1fr;
  column-gap: 10px;
  & svg {
    width: 100%;
    height: 100%;
  }
`

export const MaxAttempts = styled.div`
  h2 {
    font-size: ${props => props.theme.fontSize.normal};
    color: ${props => props.theme.globalColors.error};
    margin: 0;
  }
`