export interface AppSizeHeight {
  height?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'jumbo' | 'xjumbo';
}
export interface AppSizeWidth {
  width?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'jumbo' | 'xjumbo';
}
export interface AppColorTypes {
  color?: 'alpha' | 'bravo' | 'medium' | 'charlie' | 'currentThemeColor' | 'currentThemeColorHover' | 'black' | 'error' | 'success' | 'warn' | 'white'
}

export interface ProgressBarTypes extends AppSizeHeight, AppColorTypes {
  trackColor?: 'alpha' | 'bravo' | 'medium' | 'charlie' | 'currentThemeColor' | 'currentThemeColorHover' | 'black' | 'error' | 'success' | 'warn' | 'white'
  fill: number;
}