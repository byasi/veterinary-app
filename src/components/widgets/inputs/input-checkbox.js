import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

export const InputCheckbox = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 2
    }}
  >
    <Typography variant="subtitle2">
      System
    </Typography>
    <Typography
      color="textSecondary"
      sx={{ py: 1 }}
      variant="body2"
    >
      You will receive emails in your business email address
    </Typography>
    <FormGroup sx={{ pl: 1 }}>
      <FormControlLabel
        control={(
          <Checkbox defaultChecked />
        )}
        label={(
          <Typography variant="body1">
            Email alerts
          </Typography>
        )}
      />
      <FormControlLabel
        control={<Checkbox />}
        label={(
          <Typography variant="body1">
            Push Notifications
          </Typography>
        )}
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={(
          <Typography variant="body1">
            Text message
          </Typography>
        )}
      />
    </FormGroup>
  </Box>
);
