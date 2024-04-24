import { Box, Grid, TextField } from '@mui/material';

export const InputTextField = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      p: 2
    }}
  >
    <Grid container>
      <Grid
        item
        md={6}
        xs={12}
      >
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Name"
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Email Address"
              required
              type="email"
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              fullWidth
              label="Phone number"
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="State/Region"
            />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="City"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);
