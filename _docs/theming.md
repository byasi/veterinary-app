---
title: Theming
---

# Theming

MUI offers a utility function: `createTheme()` that creates a theme which can be passed to
the theme provider; otherwise the theme provider uses the default theme. The theme provider makes
the theme available in the component tree, and can be used via the `sx` prop, or inside styled
components using the MUI styled engine (`styled`).

## Creating a theme

The app allows you to choose between multiple theme setups, thus a wrapper was created over
the `createTheme`. Currently, the function accepts a configuration object with the following keys:

- `direction` [ 'ltr' | 'rtl' ] - Sets the text direction. If you need RTL support, please ensure
  you use `RTL` component.
- `responsiveFontSizes` [ boolean ] - Adaptive font size for small devices.
- `mode` [ 'light' | 'dark' ] - Select a specific theme configuration. You can add your own styling
  or adjust current options.

```js
// src/pages/index.js
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../theme';

const Home = () => {
  const theme = createTheme({
    direction: 'ltr',
    responsiveFontSizes: true, 
    mode: 'dark'
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        content
      </div>
    </ThemeProvider>
  );
}
```

## Nested themes

Multiple themes can be nested. The app implements this behaviour to display the components on
light/dark palette mode without changing the app global theme.

```jsx
// src/pages/index.js
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../theme';

const Home = () => {
  const theme = createTheme({
    direction: 'ltr',
    responsiveFontSizes: true,
    mode: 'dark'
  });

  const theme2 = createTheme({
    mode: 'light'
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>Main theme</div>
        <ThemeProvider theme={theme2}>
          <div>Inner theme</div>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}
```
