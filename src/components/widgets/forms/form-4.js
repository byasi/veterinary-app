import { Box, Button, Divider, Grid, TextField } from '@mui/material';

export const Form4 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
          />
        </Grid>
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Password Confirmation"
            name="passwordConfirm"
            type="password"
          />
        </Grid>
      </Grid>
      <Divider sx={{ pt: 2 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          type="submit"
          variant="contained"
        >
          Change Password
        </Button>
      </Box>
    </form>
  </Box>
);
