import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Divider, IconButton, ThemeProvider } from '@mui/material';
import { useSettings } from '../hooks/use-settings';
import { Moon as MoonIcon } from '../icons/moon';
import { Sun as SunIcon } from '../icons/sun';
import { createTheme } from '../theme';

export const WidgetPreviewer = (props) => {
  const { element, name, ...other } = props;
  const { settings } = useSettings();
  const [selectedTheme, setSelectedTheme] = useState(settings.theme);

  useEffect(() => {
    setSelectedTheme(settings.theme);
  }, [settings.theme]);

  const handleSwitch = () => {
    setSelectedTheme((prevSelectedTheme) => {
      return prevSelectedTheme === 'light' ? 'dark' : 'light';
    });
  };

  const theme = createTheme({
    ...settings,
    mode: selectedTheme
  });

  return (
    <Card
      variant="outlined"
      sx={{ mb: 8 }}
      {...other}>
      <CardHeader
        action={(
          <IconButton onClick={handleSwitch}>
            {selectedTheme === 'light'
              ? <MoonIcon fontSize="small" />
              : <SunIcon fontSize="small" />}
          </IconButton>
        )}
        title={name}
      />
      <Divider />
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </Card>
  );
};

WidgetPreviewer.propTypes = {
  element: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};
