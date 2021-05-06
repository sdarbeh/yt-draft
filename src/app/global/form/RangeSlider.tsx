import styled from "styled-components"
import { Slider, Tooltip } from '@material-ui/core';
import { calcPixels, rgbToRgba, shadeColor } from "utils/helpers/color";
import { vibrate } from "utils/helpers/methods";
import { useAppSize } from "app/hooks/theme";

interface p {
  value: number
  onChange: any
  data: string[]
  step?: number
}

const RangeSlider = ({ onChange, data, step, ...r }: p) => {
  const { icon } = useAppSize()

  const size = calcPixels({
    size: icon.xsmall,
    operator: '-',
    constant: 10,
  }) as string

  const valueText = (value: any) => {
    return data[value - 1]
  }

  return (
    <Container 
      size={size}
    >
      <Slider
        ValueLabelComponent={Label}
        valueLabelFormat={valueText}
        aria-labelledby="range-slider"
        valueLabelDisplay="auto"
        step={step}
        marks
        min={1}
        max={data.length}
        onChange={(event: any, value: any) => {
          vibrate()
          onChange(value - 1)
        }}
        // onChangeCommitted={(event: any, value: any) => onChange(value)}
        {...r}
      />
    </Container>
  )
}

export default RangeSlider

interface c {
  size: string
  theme: any
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiSlider-root {
    height: ${(p:c) => p.size};
    opacity: 1!important;
    padding: ${p => `${p.theme.icon.xsmall} 0`};
    margin-right: ${(p:c) => `calc(${p.size} + 10px)`};
  }
  .MuiSlider-rail	{
    background-color: ${p => shadeColor(p.theme .primary, 100)};
    height: ${(p:c) => p.size};
    border-radius: 10px;
  }
  .MuiSlider-track {
    background-color: ${p => p.theme .primary};
    height: ${(p:c) => p.size};
    border-radius: ${(p:c) => p.size};
  }
  .MuiSlider-thumb {
    height: ${(p:c) => `calc(${p.size} + 15px)`};
    width: ${(p:c) => `calc(${p.size} + 15px)`};
    margin-top: ${(p:c) => `calc((${p.size} + 10px) / -2)`};
    background-color: ${p => p.theme .primary};
    box-shadow: ${p => p.theme.btnShadow};
    opacity: 1!important;
    &:focus, &:hover {
      box-shadow: ${p => `0 0 0 calc(${p.size} + 3px) ${rgbToRgba(p.theme .primary, .3)}`};
    }
  }
  .MuiSlider-valueLabel {
    left: 'calc(-50% + 4px)';
  }
  .MuiSlider-mark {
    height: ${(p:c) => `calc(${p.size} + 8px)`};
    width: ${(p:c) => `calc(${p.size} + 8px)`};
    margin-top: ${(p:c) => `calc((${p.size} + 3px) / -2)`};
    background-color: ${p => shadeColor(p.theme .primary, 100)};
    box-shadow: ${p => p.theme.btnShadow};
    opacity: 1!important;
    border-radius: 50%;
    margin-left: ${(p:c) => `calc(${p.size} / -2)`};
    &:nth-child(1) {
      display: none;
    }
  }
  .MuiSlider-markActive {
    background-color: ${p => p.theme .primary};
  }
  .range-slider__tooltip	{
    background-color: ${p => p.theme .primary};
  }
`

const Label = (props: any) => {
  const { children, open, value } = props;

  return (
    <Tooltip 
      open={open} 
      enterTouchDelay={0} 
      placement="top" 
      title={value}
      className='range-slider__tooltip'
    >
      {children}
    </Tooltip>
  );
}