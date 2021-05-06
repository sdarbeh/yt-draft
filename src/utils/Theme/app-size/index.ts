export const appSizes = ['smallest', 'small', 'regular', 'large', 'largest']

export interface AppSize {
  state: 'smallest' | 'small' | 'regular' | 'large' | 'largest'
  font: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'jumbo' | 'xjumbo' | 'xxjumbo'
  icon: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'jumbo'
}