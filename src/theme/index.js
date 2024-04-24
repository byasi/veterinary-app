import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { baseThemeOptions } from './base-theme-options';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options';

export const createTheme = (config) => {
  let theme = createMuiTheme(baseThemeOptions,
    config.mode === 'dark' ? darkThemeOptions : lightThemeOptions,
    {
      direction: config.direction
    });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
