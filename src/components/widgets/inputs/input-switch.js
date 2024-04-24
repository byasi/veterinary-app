import { Box, Grid, Switch, Typography } from '@mui/material';

export const InputSwitch = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 3.5
    }}
  >
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        md={6}
        xs={12}
      >
        <Typography variant="subtitle2">
          Email Verified
        </Typography>
        <Typography
          color="textSecondary"
          sx={{ py: 1 }}
          variant="body2"
        >
          Disabling this will automatically send the user a verification
          email
        </Typography>
        <Switch defaultChecked />
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
      >
        <Typography variant="subtitle2">
          Email
        </Typography>
        <Typography
          color="textSecondary"
          sx={{ py: 1 }}
          variant="body2"
        >
          This will give the user discounted prices for all products.
        </Typography>
        <Switch />
      </Grid>
    </Grid>
  </Box>
);
