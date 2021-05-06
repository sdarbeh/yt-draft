import { useRef } from 'react'
import styled from 'styled-components'
import { capString, replaceSpace } from 'utils/helpers/text'
import { Title, FormCriteria, InputMessage } from '../form-widgets'
import { InputTypes } from './types'

const Input = (p: InputTypes) => {
  const {
    displayName, element,
    name, type, refs,
    disabled, selectOptions,
    options, criterias, value, message,
    showStringLength, ...r
  } = p

  const containerRef = useRef<HTMLDivElement>(null)
  const htmlName = replaceSpace(p.name, '_').toLowerCase()

  const showCriterias = criterias && value?.length && !message

  const defaultProps = {
    id: htmlName,
    name: htmlName,
    ref: refs,
    value: !refs ? value : undefined
  }

  return (
    <Container
      ref={containerRef}
      {...r}
    >
      <div className="input-cc">
        <Title 
          name={displayName ? displayName : capString(name)}
          showLength={showStringLength}
          value={value}
          maxLength={options ? options.maxLenth : null}
        />
        {element === "textarea" && (
          <textarea
            readOnly={disabled}
            {...defaultProps}
            {...options}
          />
        )}
        {element === "input" && (
          <input
            type={type ? type : "text"}
            readOnly={disabled}
            {...defaultProps}
            {...options}
            {...baseOptions(name)}
          />
        )}
        {element === 'select' && (
          <select
            {...defaultProps}
            {...options}
          >
            {selectOptions?.map((o: string, i) => (
              <option
                key={i}
                value={o}
              >{o}</option>))}
          </select>
        )}
      </div>
      {message && (
        <InputMessage {...message} />
      )}
      {showCriterias && (
        <FormCriteria
          inputId={htmlName}
          inputValue={value!}
          criterias={criterias!}
          parent={containerRef}
        />
      )}
    </Container>
  )
}

export default Input

const baseOptions = (name: string) => {
  let opts = {}
  switch (name) {
    case 'phone':
      opts = {
        type: 'tel',
        pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
        maxLength: '10'
      }
  }
  return opts
}

const Container = styled.div`
  display: grid;
  row-gap: ${p => `calc(${p.theme.icon.xsmall} - 6px)`};
  .input-cc {
    background-color: ${p => p.theme.bravo};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  input {
    height: ${({ theme }) => `calc(${theme.icon.xlarge} - 7px)`};
  }
  input, textarea {
    width: calc(100% - 14px);
    padding: 2px 7px 5px 7px;
    &:focus {
      border-color: ${p => p.theme.primary};
    }
  }
  input, textarea, select {
    border-bottom: 2px solid ${p => p.theme.medium};
  }
  select {
    padding: 2px 0 5px 3px;
  }
  textarea {
    height: calc(200px - 7px);
    resize: none;
  }
`