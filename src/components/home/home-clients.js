import { Box, Card, Container, Grid, Link, Typography } from '@mui/material';

export const HomeClients = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      py: 15
    }}
    {...props}>
    <Container maxWidth="lg">
      <Typography
        align="center"
        sx={{ pb: 6 }}
        variant="h3"
      >
        Your clients will love it
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card
            sx={{
              height: '100%',
              p: 3,
              position: 'relative'
            }}
            variant="outlined"
          >
            <Typography
              sx={{ color: 'textPrimary' }}
              variant="h5"
            >
              Documentation
            </Typography>
            <Typography
              sx={{
                color: 'textPrimary',
                py: 2
              }}
              variant="body2"
            >
              Documentation for our project
            </Typography>
            <Link
              href="/docs/welcome"
              color="textPrimary"
              underline="always"
              variant="body1"
            >
              Getting started guide
            </Link>
          </Card>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card
            sx={{
              height: '100%',
              p: 3,
              position: 'relative'
            }}
            variant="outlined"
          >
            <Typography
              sx={{ color: 'textPrimary' }}
              variant="h5"
            >
              See live preview
            </Typography>
            <Typography
              sx={{
                color: 'textPrimary',
                py: 2
              }}
              variant="body2"
            >
              Browse through endless possibilities
            </Typography>
            <Link
              href="/browse"
              color="textPrimary"
              underline="always"
              variant="body1"
            >
              Browse Components
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
