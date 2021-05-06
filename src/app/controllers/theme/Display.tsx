import { CenterModal } from 'app/global/modal'
import { useAccessibilltyModal } from 'app/hooks/state'
import styled from 'styled-components'
import AppSizeController from './AppSize'
import ThemeModeController from './ThemeMode'

const Dislay = (p: any) => {
  const { accessibilityModalActive, setAccessibilityModal } = useAccessibilltyModal()
  const close = () => setAccessibilityModal(false)

  if (!accessibilityModalActive) return null

  return (
    <Container {...p}>
      <CenterModal handleClose={close}>
        <div className='display___content'>
          <div className="display_desc">
            Customize your font size, color, and background. These settings will be available for all accounts on this browser.
          </div>
          <div className="display_ui_container">
            <div className="display_sec-title">Font size</div>
            <div className="display__controller">
              <AppSizeController />
            </div>
          </div>
          <div className="display_ui_container">
            <div className="display_sec-title">Background</div>
            <div className="display__controller">
              <ThemeModeController />
            </div>
          </div>
        </div>
      </CenterModal>
    </Container>
  )
}

export default Dislay

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .display___content {
    display: grid;
    row-gap: ${p => p.theme.icon.xsmall};
    max-width: 475px;
    padding: ${p => `${p.theme.icon.small} 0`};
    margin: 0 auto;
  }
  .display_desc {
    text-align: center;
    opacity: .6;
    font-weight: 500;
  }
  .display_sec-title {
    font-size: ${p => p.theme.font.xsmall};
    text-align: left;
    width: 100%;
    opacity: .8;
    font-weight: 600;
  }
  .display_ui_container {
    display: grid;
    row-gap: ${p => `calc(${p.theme.icon.xsmall} - 5px)`};
  }
  .display__controller {
    background-color: ${p => p.theme.bravo};
    border-radius: 20px;
    padding: ${p => p.theme.icon.xsmall};
    width: ${p => `calc(100% - (${p.theme.icon.xsmall} * 2))`};
  }
`