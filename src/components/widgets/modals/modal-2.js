import { Box, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from '@mui/material';

const languageOptions = [
  {
    icon: '/static/icons/uk_flag.svg',
    label: 'English'
  },
  {
    icon: '/static/icons/de_flag.svg',
    label: 'German'
  },
  {
    icon: '/static/icons/es_flag.svg',
    label: 'Spanish'
  }
];

export const Modal2 = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Paper
      elevation={12}
      sx={{
        width: 240,
        mx: 'auto'
      }}
    >
      {Object.keys(languageOptions).map((language) => (
        <MenuItem key={language}>
          <ListItemIcon>
            <Box
              sx={{
                display: 'flex',
                height: 20,
                width: 20,
                '& img': {
                  width: '100%'
                }
              }}
            >
              <img
                alt={languageOptions[language].label}
                src={languageOptions[language].icon}
              />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary={(
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                {languageOptions[language].label}
              </Typography>
            )}
          />
        </MenuItem>
      ))}
    </Paper>
  </Box>
);
