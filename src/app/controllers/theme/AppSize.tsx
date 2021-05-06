
import { RangeSlider } from 'app/global/form'
import { useAppSize } from 'app/hooks/theme'
import styled from 'styled-components'

const AppSize = () => {
  const { appSize, fontArray, setAppSize } = useAppSize()
  
  const index = fontArray.findIndex(x => x.name === appSize)

  const rangeData = () => {
    let arr = [] as string[]

    fontArray.forEach(font => {
      arr.push(font.name)
    })

    return arr
  }

  const handleSliderChange = (value: number) => {
    const match = fontArray[value].name
    setAppSize(match)
  }

  return (
    <Container>
      <div className="size_demo">Aa</div>
        <RangeSlider 
          value={index + 1}
          data={rangeData()}
          onChange={handleSliderChange}
        />
      <div className="size_demo">Aa</div>
    </Container>
  )
}

export default AppSize

const Container = styled.div`
  display: grid;
  grid-template-columns: ${p => `${p.theme.icon.normal} 1fr ${p.theme.icon.normal}`};
  column-gap: ${p => p.theme.icon.small};
  .size_demo {
    display: flex;
    align-items: center;
    justify-content: center;
    &:first-child {
      font-size: ${p => p.theme.fontSizes.smallest.normal};
    }
    &:last-child {
      font-size: ${p => p.theme.fontSizes.largest.normal};
    }
  }
`