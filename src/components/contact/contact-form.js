import { Box, Button, Grid, Link, MenuItem, Select, TextField, Typography } from '@mui/material';

export const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Full Name *
          </Typography>
          <TextField
            fullWidth
            name="name"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Company Name*
          </Typography>
          <TextField
            fullWidth
            name="company"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Work Email *
          </Typography>
          <TextField
            fullWidth
            name="email"
            type="email"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Phone Number *
          </Typography>
          <TextField
            fullWidth
            name="phone"
            required
            type="tel"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Company Size
          </Typography>
          <Select fullWidth>
            <MenuItem value="10-20">1-10</MenuItem>
            <MenuItem value="11-30">11-30</MenuItem>
            <MenuItem value="31-50">31-50</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Team
          </Typography>
          <Select fullWidth>
            <MenuItem value="engineering">Engineering</MenuItem>
            <MenuItem value="design">Design</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Project Budget *
          </Typography>
          <Select
            fullWidth
            required
          >
            <MenuItem value={20000}>$20,000+</MenuItem>
            <MenuItem value={50000}>$50,000+</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Message
          </Typography>
          <TextField
            fullWidth
            name="message"
            required
            multiline
            rows={6}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}
      >
        <Button
          fullWidth
          size="large"
          variant="contained"
        >
          Let&apos;s Talk
        </Button>
      </Box>
      <Typography
        color="textSecondary"
        sx={{ mt: 3 }}
        variant="body2"
      >
        By submitting this, you agree to the
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Privacy Policy
        </Link>
        {' '}
        and
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Cookie Policy
        </Link>
        .
      </Typography>
    </form>
  );
};
