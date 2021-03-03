import React from 'react'
import { capString, replaceSpace } from '../../../../utils/helpers/text'
// items
import { Container } from './InputStyle'

interface props {
    displayName?: string;
    type?: string;
    refs?: any;
    disabled?: boolean;
    element: 'input' | 'textarea' | 'select';
    name: string;
    placeholder?: string;
    selectOptions?: string[];
    options?: any;
}

export default (p: props) => {
    const { displayName, element, name, type, refs, disabled, selectOptions, options, ...r } = p
    const htmlName = replaceSpace(p.name, '_').toLowerCase()
    return (
        <Container>
            <div>{displayName ? displayName : capString(name)}</div>
            { element === "textarea" && (
                <textarea
                    id={htmlName}
                    name={htmlName}
                    ref={refs}
                    readOnly={disabled}
                    {...options}
                    {...r}
                />
            )}
            { element === "input" && (
                <input
                    type={type ? type : "text"}
                    id={htmlName}
                    name={htmlName}
                    ref={refs}
                    autoComplete={"no"}
                    readOnly={disabled}
                    {...options}
                    {...baseOptions(name)}
                    {...r}
                />
            )}
            { element === 'select' && (
                <select
                    name={name}
                    id={htmlName}
                    ref={refs}
                    {...options}
                    {...r}
                >
                    {selectOptions?.map((o: string, i) => (
                        <option
                            key={i}
                            value={o}
                        >
                            {o}
                        </option>
                    ))}
                </select>
            )}
        </Container>
    )
}

const baseOptions = (name: string) => {
    let opts = {}
    switch (name) {
        case 'Phone':
            opts = {
                type: 'tel',
                pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
                maxLength: '12'
            }
    }
    return opts
}