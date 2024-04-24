import { Box, Button, Grid, Switch, TextField, Typography } from '@mui/material';

export const Form1 = () => (
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
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Full name"
            name="name"
            required
            value="Miron Vitold"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Email address"
            name="email"
            required
            value="miron.vitold@devias.io"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Country"
            name="country"
            value="USA"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="State/Region"
            name="state"
            value="New York"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Address 1"
            name="address1"
            value="Street John Wick, no. 7"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Address 2"
            name="address2"
            value="House #25"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            value="+55 748 327 439"
          />
        </Grid>
        <Grid item />
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            gutterBottom
            variant="subtitle2"
          >
            Email Verified
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Disabling this will automatically send the user a verification
            email
          </Typography>
          <Switch
            defaultChecked
            edge="start"
            name="isVerified"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            gutterBottom
            variant="subtitle2"
          >
            Discounted Prices
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            This will give the user discounted prices for all products
          </Typography>
          <Switch
            color="primary"
            defaultChecked={false}
            edge="start"
            name="hasDiscount"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
        >
          Update Customer
        </Button>
      </Box>
    </form>
  </Box>
);
