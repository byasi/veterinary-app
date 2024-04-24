import NextLink from 'next/link';
import { Box, Chip, Container, Link, Tooltip, Typography } from '@mui/material';

const platformIcons = {
  Amplify: '/static/icons/amplify.svg',
  Auth0: '/static/icons/auth0.svg',
  Firebase: '/static/icons/firebase.svg',
  JWT: '/static/icons/jwt.svg'
};

export const AuthBanner = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      borderBottom: 1,
      borderColor: 'divider',
      py: 1
    }}
  >
    <Container maxWidth="md">
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <Chip
          color="primary"
          label="NEW"
          sx={{ mr: 2 }}
          size="small"
        />
        <Typography variant="subtitle2">
          Visit our
          {' '}
          <NextLink
            href="/docs/welcome"
            passHref
          >
            <Link variant="subtitle2">
              docs
            </Link>
          </NextLink>
          {' '}
          and find out how to switch between
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            '& img': {
              height: 30,
              m: 1
            }
          }}
        >
          <Tooltip title="Amplify">
            <img
              alt="Amplify"
              src={platformIcons.Amplify}
            />
          </Tooltip>
          <Tooltip title="Auth0">
            <img
              alt="Auth0"
              src={platformIcons.Auth0}
            />
          </Tooltip>
          <Tooltip title="Firebase">
            <img
              alt="Firebase"
              src={platformIcons.Firebase}
            />
          </Tooltip>
          <Tooltip title="JSON Web Token">
            <img
              alt="JWT"
              src={platformIcons.JWT}
            />
          </Tooltip>
        </Box>
      </Box>
    </Container>
  </Box>
);
