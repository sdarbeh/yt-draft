import styled from "styled-components"

interface p {
  name: string;
  maxLength: number;
  value?: string;
  showLength?: boolean;
}

const Title = ({ name, showLength, value, maxLength }: p) => {
  return (
    <Container className='input-cc-title'>
      <span>{name}</span>

      {(showLength && value && maxLength) && (
        <span>{`${value.length}/${maxLength}`}</span>
      )}
    </Container>
  )
}

export default Title

const Container = styled.div`
  padding: 5px 7px;
  font-weight: 500;
  height: ${({ theme }) => `calc(${theme.icon.normal} - 10px)`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  span:nth-child(1) {
    font-size: ${p => p.theme.font.small};
    opacity: .8;
  }
  span:nth-child(2) {
    font-size: ${p => `calc(${p.theme.font.xsmall} - 1px)`};
    opacity: .6;
  }
`