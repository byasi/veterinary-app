import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import { ArrowLeft as ArrowLeftIcon } from '../icons/arrow-left';

const getTitle = (pathname) => pathname
  .split('/')
  .pop()
  .split('-')
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(' ');

export const BrowseLayout = (props) => {
  const { children } = props;
  const router = useRouter();
  const isBase = router.pathname === '/browse';
  const title = isBase
    ? 'Browse components'
    : getTitle(router.pathname);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          py: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid
            alignItems="center"
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              {!isBase && (
                <NextLink
                  href="/browse"
                  passHref
                >
                  <Button
                    component="a"
                    startIcon={<ArrowLeftIcon fontSize="small" />}
                    sx={{ mb: 3 }}
                  >
                    Back to components
                  </Button>
                </NextLink>
              )}
              <Typography variant="h1">
                {title}
              </Typography>
              {isBase && (
                <Typography
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="body1"
                >
                  Browse through over 100 individual components and over 35 screens
                </Typography>
              )}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: {
                  md: 'flex',
                  xs: 'none'
                },
                justifyContent: 'center'
              }}
            >
              <img
                alt="Components"
                src="/static/browse/hero.svg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider />
      {children}
    </>
  );
};

BrowseLayout.propTypes = {
  children: PropTypes.node
};
